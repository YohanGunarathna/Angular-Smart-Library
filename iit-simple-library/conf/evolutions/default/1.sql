# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table books (
  isbn                          integer auto_increment not null,
  title                         varchar(255),
  sector                        varchar(255),
  month                         integer not null,
  year                          integer not null,
  hours                         integer not null,
  minutes                       integer not null,
  seconds                       integer not null,
  reader                        integer not null,
  authors                       varchar(255),
  publisher                     varchar(255),
  pubyear                       varchar(255),
  pages                         varchar(255),
  constraint pk_books primary key (isbn)
);

create table dvds (
  isbn                          integer auto_increment not null,
  title                         varchar(255),
  sector                        varchar(255),
  month                         integer not null,
  year                          integer not null,
  hours                         integer not null,
  minutes                       integer not null,
  seconds                       integer not null,
  reader                        integer not null,
  language                      varchar(255),
  subtitles                     varchar(255),
  producer                      varchar(255),
  actors                        varchar(255),
  constraint pk_dvds primary key (isbn)
);

create table reader (
  readerid                      integer auto_increment not null,
  name                          varchar(255),
  mobileno                      integer not null,
  email                         varchar(255),
  constraint pk_reader primary key (readerid)
);


# --- !Downs

drop table if exists books;

drop table if exists dvds;

drop table if exists reader;

