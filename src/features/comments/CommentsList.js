import { Col, Row } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId}></CommentForm>
            </Col>
        );
    }
    else if (errMsg) {
        return (
            <Col md='5' className='m-1'>
                <Error errMsg={errMsg} />
            </Col>
        );
    } 
};

export default CommentsList;