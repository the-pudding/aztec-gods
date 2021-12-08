library(tidyverse)
library(jsonlite)

gods_raw <- read.csv("./raw/gods.csv")
gods <- gods_raw %>% select(2:7) %>% rename("id" = Name)

relations_raw <- read.csv("./raw/relations.csv")
relations <- relations_raw %>% select(5,6,4)

# Exports
json <- toJSON(gods, pretty = T)
write(json, "./tidy/gods.json")

relations_json <- toJSON(relations, pretty = T)
write(relations_json, "./tidy/relations.json")
