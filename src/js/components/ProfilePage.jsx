import React from 'react';

import ApprovalQueue from './ApprovalQueue';
import MemberInfoEdit from './MemberInfoEdit';
import MemberCertifications from './MemberCertifications';
import MemberServiceCredits from './MemberServiceCredits';
import UpcomingShifts from './UpcomingShifts';
import ExpiringCerts from './ExpiringCerts';
import MemberHistory from './MemberHistory';
import Icon from './Icon';

const ProfilePage = () => (
  <div className="ui stackable grid">
    <div className="twelve wide column">
      <ApprovalQueue />
      <div className="ui hidden divider" />
      <h1 className="ui horizontal divider header">Contact Details</h1>
      <p>Keep us up to date so we can achieve maximum synergy :)</p>
      <MemberInfoEdit />
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
      <MemberCertifications />
      <div className="ui hidden divider" />
      <h1 className="ui horizontal divider header">Service Credits</h1>
      <p>
        These are your approved service credits from this semester. To get
        started, just enter a brief description of what you did and submit it
        for approval!
      </p>
      <MemberServiceCredits />
    </div>

    <div className="four wide column">
      <div className="ui horizontal divider">Upcoming Shifts</div>
      <UpcomingShifts />
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">Expiring Certs</div>
      <ExpiringCerts />
      <div className="ui hidden divider"></div>
      <div className="ui horizontal divider">My Roles</div>
      <MemberHistory />
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

export default ProfilePage;