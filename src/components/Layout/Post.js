import React from "react";
import classes from "../UI/Post.module.css";

function Post() {
    return (
        <div className={classes.post}>
            <div className={classes.header}>
                <div className={classes.details}>
                    <h3>@Irma</h3>
                    <small> 15 MINUTES AGO </small>
                </div>
            </div>

            <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, dui euismod tempus accumsan, neque metus ultrices sapien,
                et feugiat urna eros sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nulla bibendum molestie scelerisque. Proin nec metus luctus, gravida purus id, sodales felis.
                Phasellus varius, leo at scelerisque accumsan, quam ante hendrerit ipsum, vitae consectetur dolor risus vitae nisi.
            </div>

            <div className={classes.actions}>
                {/*skontati kako dodati ikone u react*/}
            </div>

            <div className={classes.likes_info}>
                <p>Liked by <b>Kenan Selimović</b> and <b>2,333,222 others</b></p>
            </div>

            <div className={classes.view_comments}>
                View all 20 comments
            </div>

            <div className={classes.action_buttons}>
                <button className={classes.delete_btn}> DELETE </button>
                <button className={classes.update_btn}> UPDATE </button>
            </div>

        </div>
    )
}

export default Post