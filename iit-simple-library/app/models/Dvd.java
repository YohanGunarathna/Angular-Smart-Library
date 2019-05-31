package models;

import io.ebean.Finder;

import javax.persistence.*;

@Entity
@Table(name = "dvds")
public class Dvd extends LibraryItem{

    @Column(name = "language")
    private String language;

    @Column(name = "subtitles")
    private String subtitles;

    @Column(name = "producer")
    private String producer;

    @Column(name = "actors")
    private String actors;

    public Dvd(String isbn, String title, String sector, String language, String subtitles, String producer, String actors,DateTime publicationdate, DateTime borrowdatetime, int reader) {
        super(isbn, title, sector, publicationdate, borrowdatetime, reader);
        this.language = language;
        this.subtitles = subtitles;
        this.producer = producer;
        this.actors = actors;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSubtitles() {
        return subtitles;
    }

    public void setSubtitles(String subtitles) {
        this.subtitles = subtitles;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }


    public static final Finder<String , Dvd> find = new Finder<>(Dvd.class);

    public static void delete(String isbn) {find.deleteById(isbn);}

}
