library(tidyverse)
library(jsonlite)

gods_raw <- read.csv("./raw/light-db.tsv", sep="\t")
gods_basic <- gods_raw %>% 
  select(id = "ID",
         "name" = "Name", 
         "importance" = "type",
         "field" = "Field",
         bio = Text,
         spellings = "Other.names.or.spelling",
         source = "Illustration.source") %>%
  mutate(name = str_squish(name), id = str_squish(id)) %>%
  filter(id != "cihuateteo")

# gods_main <- gods_basic %>% filter(importance != "secondary")

gods_with_fields <- gods_basic %>% 
  separate_rows(field, sep = ",") %>%
  mutate(field = str_squish(field))

gods <- gods_with_fields %>% 
  pivot_wider(names_from=field, values_from=id) %>%
  


# Keywords ("Domains") ########################################
# keywords_raw <- read.csv("./raw/keywords.tsv", sep="\t", header=F) %>%
#   rename("domain" = V1, "keyword" = V2)
# keywords <- keywords_raw %>% 
#   separate_rows(keyword, sep = ",") %>%
#   mutate(keyword = str_squish(keyword))
# 
# kw_animals <- keywords %>% filter(domain == "Animals")
# kw_celestial <- keywords %>% filter(domain == "Celestial")
# kw_trade <- keywords %>% filter(domain == "Craft and trade")
# kw_death <- keywords %>% filter(domain == "Death")
# kw_violence <- keywords %>% filter(domain == "Evil and violence")
# kw_food <- keywords %>% filter(domain == "Food")
# kw_knowledge <- keywords %>% filter(domain == "Knowledge")
# kw_fertility <- keywords %>% filter(domain == "Life and fertility")
# kw_excess <- keywords %>% filter(domain == "Moral values and excess")
# kw_nature <- keywords %>% filter(domain == "Nature")
# kw_pleasure <- keywords %>% filter(domain == "Pleasure")
# 
# gods_with_domains <- gods_basic %>%
#   separate_rows(keyword, sep = ",") %>%
#   mutate(keyword = str_squish(keyword)) %>%
#   mutate("animals" = ifelse(keyword %in% kw_animals$keyword, 1, 0),
#          "celestial" = ifelse(keyword %in% kw_celestial$keyword, 1, 0),
#          "trade" = ifelse(keyword %in% kw_trade$keyword, 1, 0),
#          "death" = ifelse(keyword %in% kw_death$keyword, 1, 0),
#          "violence" = ifelse(keyword %in% kw_violence$keyword, 1, 0),
#          "food" = ifelse(keyword %in% kw_food$keyword, 1, 0),
#          "knowledge" = ifelse(keyword %in% kw_knowledge$keyword, 1, 0),
#          "fertility" = ifelse(keyword %in% kw_fertility$keyword, 1, 0),
#          "excess" = ifelse(keyword %in% kw_excess$keyword, 1, 0),
#          "nature" = ifelse(keyword %in% kw_nature$keyword, 1, 0),
#          "pleasure" = ifelse(keyword %in% kw_pleasure$keyword, 1, 0))
################################################################################

gods <- gods_with_domains %>% 
  select(1, 2, 3, 5, 6, 7, 8:18) %>%
  group_by(name) %>%
  summarize(id = first(id),
            importance = first(importance),
            bio = first(bio),
            spellings = first(spellings),
            source = first(source),
            animals = sum(animals),
            celestial = sum(celestial),
            "trade" = sum(trade),
            death = sum(death),
            "violence" = sum(violence),
            food = sum(food),
            knowledge = sum(knowledge),
            "fertility" = sum(fertility),
            "excess" = sum(excess),
            nature = sum(nature),
            pleasure = sum(pleasure))

  
write(toJSON(gods, pretty = T), "./tidy/gods.json")
# write(toJSON(gods_with_keywords, pretty = T, factor = "string", auto_unbox = T, na = "string"), "./tidy/gods_details.json")


# Individual relationships
all_rel <- gods_raw %>%
  select(2, "Aspects..other.gods.that.can.change.into.or.him.her.or.share.similar.domains.") %>%
  rename("aspect" = "Aspects..other.gods.that.can.change.into.or.him.her.or.share.similar.domains.")

# submission <- all_rel %>%
#   select(1, 2) %>% 
#   separate_rows(submission, sep = ", ") %>%
#   filter(submission != "") %>%
#   mutate(relation = "submission") %>%
#   rename("source" = "Name", "target" = "submission")
cooperation <- all_rel %>%
  select(1, 3) %>% 
  separate_rows(cooperation, sep = ", ") %>%
  filter(cooperation != "") %>%
  mutate(relation = "cooperation") %>%
  rename("source" = "Name", "target" = "cooperation")
union <- all_rel %>%
  select(1, 4) %>%
  separate_rows(union, sep = ", ") %>%
  filter(union != "") %>%
  mutate(relation = "cooperation") %>% # Union and cooperation merged
  rename("source" = "Name", "target" = "union")
authority <- all_rel %>%
  select(1, 5) %>% 
  separate_rows(authority, sep = ", ") %>%
  filter(authority != "") %>%
  mutate(relation = "authority") %>%
  rename("source" = "Name", "target" = "authority")
aspect <- all_rel %>%
  # select(1, 6) %>% 
  separate_rows(aspect, sep = ", ") %>%
  filter(aspect != "") %>%
  mutate(relation = "aspect") %>%
  rename("source" = "Name", "target" = "aspect")

# All relationships
rel <- bind_rows(aspect) %>%
  distinct(source, target, relation)
not_sure <- rel %>% filter(grepl("([?$])", target))
details <-  rel %>% filter(grepl("([.(.)])", target))

rel_clean <- rel %>% 
  filter(!grepl("([.?$])", target)) %>%
  filter(!grepl("([.(.)])", target)) %>%
  mutate(target = str_squish(target)) %>%
  mutate(source = str_squish(source))

diff <- length(unique(rel_clean$target)) - length(unique(rel_clean$source))

weird_names <- rel_clean %>% mutate(is_unique = target %in% source) %>%
  filter(is_unique == FALSE)
weird_sources <- rel_clean %>% mutate(is_unique = source %in% target) %>%
  filter(is_unique == FALSE)

relationships <- rel_clean %>% mutate(is_unique = target %in% source) %>%
  filter(is_unique == TRUE) %>%
  select(1:3)

write(toJSON(relationships, pretty = T), "./tidy/relations.json")
write.csv(not_sure, "./problems/not_sure.csv")
write.csv(details, "./problems/details.csv")
write.csv(weird_names, "./problems/not_clean.csv")
