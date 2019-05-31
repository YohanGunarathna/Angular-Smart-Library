package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import io.ebean.*;
import models.Book;
import models.DateTime;
import models.Dvd;
import models.Reader;
import play.libs.Json;
import play.mvc.*;

import java.util.List;

public class HomeController extends Controller {

    public Result index() {

        List<Book> books = Ebean.find(Book.class).findList();
        return ok(Json.toJson(books));
    }

    public Result addBook() {


        JsonNode body = request().body().asJson();

        String isbn = body.get("isbn").asText();
        String title = body.get("title").asText();
        String sector = body.get("sector").asText();
        String authors = body.get("author").asText();
        String publisher = body.get("publisher").asText();
        String pages = body.get("pages").asText();
        String pubYear = body.get("pubyear").asText();
/*        int month = body.get("month").asInt();
        int day = body.get("day").asInt();
        int year = body.get("year").asInt();
        int hours = body.get("hours").asInt();
        int minutes = body.get("minutes").asInt();
        int seconds	 = body.get("seconds").asInt();*/

        Book book = new Book(isbn, title, sector, authors, publisher,pubYear, pages,
                new DateTime(0, 0, 0, 0, 0, 0),
                new DateTime(0, 0, 0, 0, 0, 0), 0);
        //book.setName(name);
        //book.setAuthor(author);

        Ebean.save(book);

        List<Book> books = Ebean.find(Book.class).findList();
        return ok(Json.toJson(books));
    }


    public Result getalldvds() {


        List<Dvd> dvds = Ebean.find(Dvd.class).findList();

        return ok(Json.toJson(dvds));
    }


    public Result addDVD() {

        JsonNode body = request().body().asJson();

        int isbn = body.get("isbn").asInt();
        String title = body.get("title").asText();
        String sector = body.get("sector").asText();
        // int reader	 = body.get("reader").asInt();
        String language = body.get("language").asText();
        String subtitles = body.get("subtitles").asText();
        String producer = body.get("producer").asText();
        String actors = body.get("actors").asText();

/*        int month = body.get("month").asInt();
        int day = body.get("day").asInt();
        int year = body.get("year").asInt();
        int hours = body.get("hours").asInt();
        int minutes = body.get("minutes").asInt();
        int seconds	 = body.get("seconds").asInt();*/

        Dvd dvd = new Dvd(isbn, title, sector, language, subtitles, producer, actors,
                new DateTime(0, 0, 0, 0, 0, 0),
                new DateTime(0, 0, 0, 0, 0, 0), 0);
        //book.setName(name);
        //book.setAuthor(author);

        Ebean.save(dvd);

        List<Dvd> dvds = Ebean.find(Dvd.class).findList();
        return ok(Json.toJson(dvds));
    }


    public Result deleteallbooks() {


        List<Book> books = Ebean.find(Book.class).findList();

        return ok(Json.toJson(books));
    }


    public Result deleteBook(String isbn) {

        Book book = Book.find.byId(isbn);
        if (book == null) {
            return notFound();
        } else {
            Book.delete(isbn);
            return ok();
        }
    }

    public Result deletealldvds() {


        List<Dvd> dvds = Ebean.find(Dvd.class).findList();

        return ok(Json.toJson(dvds));
    }


    public Result deleteDVD(String isbn) {

        Dvd  dvd = Dvd.find.byId(isbn);

        if (dvd == null) {
            return notFound();

        } else {
            Dvd.delete(isbn);
            return ok();
        }

    }

    public Result addallreader() {


        List<Reader> readers = Ebean.find(Reader.class).findList();

        return ok(Json.toJson(readers));
    }


    public Result addreader() {

        JsonNode body = request().body().asJson();

        int readerid = body.get("readerid").asInt();
        String name = body.get("name").asText();
        int mobileno = body.get("mobileno").asInt();
        String email = body.get("email").asText();

        Reader reader = new Reader(readerid, name, mobileno, email);


       Ebean.save(reader);

            List<Reader> readers = Ebean.find(Reader.class).findList();
        return ok(Json.toJson(readers));
    }
}

