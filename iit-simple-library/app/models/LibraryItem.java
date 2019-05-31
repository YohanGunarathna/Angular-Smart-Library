package models;


import jdk.nashorn.internal.ir.annotations.Reference;

import javax.persistence.*;
import java.lang.annotation.Inherited;

@MappedSuperclass
public class LibraryItem {

    @Id
    @Column(name = "isbn")
    private String isbn;

    @Column(name = "title")
    private String title;

    @Column(name = "sector")
    private String sector;

    @Embedded
    @Column(name = "publicationdate")
    private DateTime publicationdate;

    @Column(name = "borrowdatetime")
    private DateTime borrowdatetime;

    @Column(name = "reader")
    private int reader;

    public LibraryItem(String isbn, String title, String sector, DateTime publicationdate, DateTime borrowdatetime, int reader) {
        this.isbn = isbn;
        this.title = title;
        this.sector = sector;
        this.publicationdate = publicationdate;
        this.borrowdatetime = borrowdatetime;
        this.reader = reader;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public DateTime getPublicationdate() {
        return publicationdate;
    }

    public void setPublicationdate(DateTime publicationdate) {
        this.publicationdate = publicationdate;
    }

    public DateTime getBorrowdatetime() {
        return borrowdatetime;
    }

    public void setBorrowdatetime(DateTime borrowdatetime) {
        this.borrowdatetime = borrowdatetime;
    }

    public int getReader() {
        return reader;
    }

    public void setReader(int reader) {
        this.reader = reader;
    }
}
