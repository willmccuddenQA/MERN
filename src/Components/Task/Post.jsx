'use strict'
import PropTypes from 'prop-types';

const Post = (props) =>{
    const {name, body, email} = props;

    return(
        <>
            <h3>{props.headerText}</h3>
            <p>{name}</p>
            <p>{body}</p>
            <a href="mailto:willmccudden@gmail.com">{email}</a>
        </>
    )
}

Post.defaultProps = {
    headerText: "Default Header"
}

Post.propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    mail: PropTypes.string
}

export default Post;