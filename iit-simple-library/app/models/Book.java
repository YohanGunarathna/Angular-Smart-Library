package models;

import io.ebean.Finder;

import javax.persistence.*;
import java.lang.annotation.Inherited;

@Entity
@Table(name = "books")
public class Book extends LibraryItem {

    @Column(name = "authors")
    private String authors;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "pubYear")
    private String pubYear;

    @Column(name = "pages")
    private String pages;

    public Book(String isbn, String title, String sector, String authors, String publisher,String publicationdate, String pages, DateTime borrowdatetime, int reader) {
        super(isbn, title, sector, publicationdate, borrowdatetime, reader);
        this.authors = authors;
        this.publisher = publisher;
        this.pubYear = pubYear;
        this.pages = pages;
    }

    public String getAuthors() {
        return authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getPages() {
        return pages;
    }

    public void setPages(String pages) {
        this.pages = pages;

    }

    public static final Finder<String , Book> find = new Finder<>(Book.class);

    public static void delete(String isbn) {find.deleteById(isbn);}

    public String getPubYear() {
        return pubYear;
    }

    public void setPubYear(String pubYear) {
        this.pubYear = pubYear;
    }
}
