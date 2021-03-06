import {ListGroup, Badge} from "react-bootstrap";

function RepoRow(props: {
	reponame: string,
	starcount: number,
	open: () => void
}){
	return(
		<ListGroup.Item
			className="d-flex justify-content-between align-items-start"
			action
			onClick={props.open}
		>
			 <div className="ms-2 me-auto fw-bold">{props.reponame}</div>
			 <Badge bg="primary" pill>⭐{props.starcount}</Badge>
		</ListGroup.Item>
	);
}

export default RepoRow;