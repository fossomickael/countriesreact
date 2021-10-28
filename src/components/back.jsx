import { useHistory } from "react-router-dom";

const Back = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()} className="back"><i class="fas fa-arrow-left"></i> Back</button>
        </>
    );
};

export default Back;