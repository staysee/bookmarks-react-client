import React from 'react'
import './bookmarkApp.css'

import BookmarkList from '../bookmarkList/bookmarkList'
import Fab from '../fab/fab'

class BookmarkApp extends React.Component {
    render() {
        return(
            <div className="bookmarkApp">
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks}/>
                <Fab />
            </div>
        )
    }
}

export default BookmarkApp