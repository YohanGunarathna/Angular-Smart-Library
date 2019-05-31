package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reader")
public class Reader {

    @Id
    @Column(name = "readerid")
    private int readerid;

    @Column(name = "name")
    private String name;

    @Column(name = "mobileno")
    private int mobileno;

    @Column(name = "email")
    private String email;

    public Reader(int readerid, String name, int mobileno, String email) {
        this.readerid = readerid;
        this.name = name;
        this.mobileno = mobileno;
        this.email = email;
    }

    public int getReaderid() {
        return readerid;
    }

    public void setReaderid(int readerid) {
        this.readerid = readerid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMobileno() {
        return mobileno;
    }

    public void setMobileno(int mobileno) {
        this.mobileno = mobileno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
