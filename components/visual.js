import React from "react";
import Human from "../components/human";

function OnloadHumans(props) {
    return Array
        .from(Array(props.count).keys())
        .map((item, i) => <Human key={`onload-${i}`} color="#153B58" />);
}

function FcpHumans(props) {
    return Array
        .from(Array(props.count).keys())
        .map((item, i) => <Human key={`onload-${i}`} color="#5486AA" />);
}

function LoadingHumans(props) {
    return Array
        .from(Array(props.count).keys())
        .map((item, i) => <Human key={`onload-${i}`} color="#ffffff" />);
}

class Visual extends React.Component {

    render() {
        const { onloadHumanCount, fcpHumanCount, loadingHumanCount } = this.props;

        return (
            <div>
                <OnloadHumans count={onloadHumanCount} />
                <FcpHumans count={fcpHumanCount} />
                <LoadingHumans count={loadingHumanCount} />
            </div>
        );
    }
}

export default Visual;