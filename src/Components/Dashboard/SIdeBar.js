import '../../css/dashboard/sidebar.css'

export default function SideBar(){
    return(
        <div className="sidebar">
            <div className="top">
             <h4>Home</h4>
            </div>


            <div className="bottom">
                <p>This is a page that belongs to you and has lots of events. 
                You can use it to keep up-to-date with your favorite groups and to find out 
                what's going on in the Caribbean region.</p>
                <hr />

                <div className="buttons">
                    <button>Create a Post</button> <br />
                    <button>Create a Community</button>
                </div>
            </div>
        </div>
    )
}