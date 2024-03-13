
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-blue-200 ml-4 mt-2 pt-4 rounded-xl">
            <div>
                <h3 className="text-xl text-blue-500 font-bold bg-white bg-opacity-60 text-center rounded-t-xl p-4 mx-6">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-xl bg-blue-500 text-white shadow-lg rounded-b-xl text-center p-4 mx-6 ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks