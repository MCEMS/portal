import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const ApprovalQueue = require('./ApprovalQueue');
const MemberInfoEdit = require('./MemberInfoEdit');
const MemberCertifications = require('./MemberCertifications');
const MemberServiceCredits = require('./MemberServiceCredits');
const UpcomingShifts = require('./UpcomingShifts');
const ExpiringCerts = require('./ExpiringCerts');
const MemberHistory = require('./MemberHistory');
const Icon = require('./Icon');

const Profile = (props) => (
  <div className="ui stackable grid">
    <div className="twelve wide column">
      <ApprovalQueue />
      <div className="ui hidden divider" />
      <h1 className="ui horizontal divider header">Contact Details</h1>
      <p>Keep us up to date so we can achieve maximum synergy :)</p>
      <MemberInfoEdit personId={props.personId} />
      <div className="ui hidden divider" />
      <h1 className="ui horizontal divider header">Certifications</h1>
      <p>
        Here are your verified certifications. Add all the ones you have!
        Don&rsquo;t see the one you have in the dropdown? Ask an admin to add it.
      </p>
      <p>
        <strong>Note:</strong> It may take some time for your newly added
        certification to appear here, as it will need to be verified by an
        admin.
      </p>
      <MemberCertifications personId={props.personId} />
      <div className="ui hidden divider" />
      <h1 className="ui horizontal divider header">Service Credits</h1>
      <p>
        These are your approved service credits from this semester. To get
        started, just enter a brief description of what you did and submit it
        for approval!
      </p>
      <MemberServiceCredits personId={props.personId} />
    </div>

    <div className="four wide column">
      <div className="ui horizontal divider">Upcoming Shifts</div>
      <UpcomingShifts personId={props.personId} />
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">Expiring Certs</div>
      <ExpiringCerts personId={props.personId} />
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">My Roles</div>
      <MemberHistory personId={props.personId} />
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">Duty Hours</div>
      <div>
        <div className="ui tiny three statistics">
          <div className="green statistic">
            <div className="value">26</div>
            <div className="label">Month</div>
          </div>
          <div className="green statistic">
            <div className="value">127</div>
            <div className="label">Semester</div>
          </div>
          <div className="green statistic">
            <div className="value">1,933</div>
            <div className="label">All Time</div>
          </div>
        </div>
      </div>
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">Actions</div>
      <div>
        <div className="ui small fluid button">
          <Icon icon="emergency" /> Request driver training
        </div>
      </div>
      <p></p>
      <div>
        <div className="ui small fluid button">
          <Icon icon="doctor" /> Request crew chief training
        </div>
      </div>
    </div>
  </div>
);
Profile.propTypes = {
  personId: PropTypes.number.isRequired,
};

const mapStateToProps = () => ({
  personId: -1,
});

const ProfilePage = connect(mapStateToProps)(Profile);
export default ProfilePage;
