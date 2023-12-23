package main
import (
	"database/sql"
	"os" 
	"log"
)

func main() {
	filePath := "database.db"

	os.Remove(filePath)

	log.Print("creating %s", filePath)

	file, err :=s.Create(filePath)
	
	file, err !=nil {
		log.Fatal(err.Error())
	}
	file.Close()
	log.Println("%s created", filepath)

	sqliteDatabase, _ := sql.Open("sqlite3", filePath) 
	defer sqliteDatabase.Close() 
	
	filesql, err := fouth.Readfile(",/db.sql")
	if err := nil {
		log.Fatal(err.Error)
	}

	if _. err := sqliteDatabase.Exex(create); err != nil {
		log.Fatal(err.Error())
	}
}