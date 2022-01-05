library(tidyverse)
library(jsonlite)

raw <- read.csv("./raw/light-db.csv", sep=";")
gods <- raw %>% 
  select("name" = "Name", 
         "importance" = "Importance..dark.green....main.gods..light.green....second.rank.gods..orange....minor.gods",
         "keywords" = "Keywords") %>%
  mutate(name = str_squish(name))

gods_with_keywords <- gods %>%
  separate_rows(keywords, sep = ",") %>%
  mutate(keywords = str_squish(keywords), hasKeyword = "1") %>% 
  pivot_wider(names_from = "keywords", values_from = "hasKeyword")
  
write(toJSON(gods, pretty = T), "./tidy/gods.json")
write(toJSON(gods_with_keywords, pretty = T, factor = "string", auto_unbox = T, na = "string"), "./tidy/gods_details.json")


# Individual relationships
light <- raw %>%
  select(2, 7:11) %>%
  rename("submission" = "Submission.relationship..son.daughter.of.OR.killed.by.",
         "cooperation" = "Equal.relationship..sister.brother.OR.cooperation.help.from.",
         "union" = "Equal.relationship...Union..Married.to..sexual.relation.with.",
         "authority" = "Authority.on..father.mother.of.OR.killed.",
         "aspect" = "Aspects..other.gods.that.can.change.into.or.him.her.or.share.similar.domains.")

submission <- light %>%
  select(1, 2) %>% 
  separate_rows(submission, sep = ", ") %>%
  filter(submission != "") %>%
  mutate(relation = "submission") %>%
  rename("source" = "Name", "target" = "submission")
cooperation <- light %>%
  select(1, 3) %>% 
  separate_rows(cooperation, sep = ", ") %>%
  filter(cooperation != "") %>%
  mutate(relation = "cooperation") %>%
  rename("source" = "Name", "target" = "cooperation")
union <- light %>%
  select(1, 4) %>% 
  separate_rows(union, sep = ", ") %>%
  filter(union != "") %>%
  mutate(relation = "union") %>%
  rename("source" = "Name", "target" = "union")
authority <- light %>%
  select(1, 5) %>% 
  separate_rows(authority, sep = ", ") %>%
  filter(authority != "") %>%
  mutate(relation = "authority") %>%
  rename("source" = "Name", "target" = "authority")
aspect <- light %>%
  select(1, 6) %>% 
  separate_rows(aspect, sep = ", ") %>%
  filter(aspect != "") %>%
  mutate(relation = "aspect") %>%
  rename("source" = "Name", "target" = "aspect")

# All relationships
rel <- bind_rows(submission, cooperation, union, authority, aspect)
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

relationships <- rel_clean %>% mutate(is_unique = target %in% source) %>%
  filter(is_unique == TRUE) %>%
  select(1:3)

write(toJSON(relationships, pretty = T), "./tidy/relations.json")
write.csv(not_sure, "./problems/not_sure.csv")
write.csv(details, "./problems/details.csv")
write.csv(weird_names, "./problems/not_clean.csv")

#############################
## OLD ## From Notion #######
gods_raw <- read.csv("./raw/notion/gods.csv")
gods <- gods_raw %>% select(2:7) %>% rename("id" = Name)

relations_raw <- read.csv("./raw/notion/relations.csv")
relations <- relations_raw %>% select(5,6,4)

# Exports
#json <- toJSON(gods, pretty = T)
#write(json, "./tidy/gods.json")

#relations_json <- toJSON(relations, pretty = T)
#write(relations_json, "./tidy/relations.json")
