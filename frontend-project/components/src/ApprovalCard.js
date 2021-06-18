import React from 'react';

const ApprovalCard = () => {
    return (
    <div className= "ui card">
        <div className="content"> Do you want to approve this comment?</div>
        <div className="extra content">
            <div className="ui two buttons">
            <div className="ui green button"> Approve</div>
            <div className="ui red button"> Reject </div>
            </div>
        </div>
    </div>
    );
};

export default ApprovalCard;