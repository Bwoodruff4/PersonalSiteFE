import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


export default function ReadingList() {
    const [books, setBooks] = useState([])
    
    useEffect(()=>{
        fetch("https://www.googleapis.com/books/v1/users/113735579236030771204/bookshelves/1001/volumes")
          .then(response => response.json())
          .then(books => {
            const booksList = books.items
            setBooks(booksList)
          })
          
    })

    const useStyles = makeStyles({
        root: {
          minWidth: 500,
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      
    const classes = useStyles()

    const bookCards = books.map(book => {
        return(
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"grey"}}>
                    <CardContent>
                        <img src={book.volumeInfo.imageLinks.thumbnail}/>
                    </CardContent>
                </Card>
            </Grid>
        )
    })

    return (
        <Grid container spacing={1} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>   
                {bookCards}
        </Grid>
    )
}
