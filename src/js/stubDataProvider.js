(function() {
  var StubDataProvider = {};
  var self = this;
  var certificationTypesCallback;
  var certificationsCallback;
  var membersCallback;
  var serviceCreditsCallback;
  var rolesCallback;
  var certificationTypes = [
    {
      id: 1,
      type: 'EMT'
    },
    {
      id: 2,
      type: 'NREMT-B'
    },
    {
      id: 3,
      type: 'Professional Rescuer CPR'
    }
  ];
  var members = [
    {
      id: 1,
      first_name: 'Ben',
      last_name: 'Burwell',
      phone: '4846643100',
      email: 'ben.burwell@example.com',
      campus_address: 'Walz 123',
      class_year: '2015',
      campus_mailbox: '2559',
      home_address: '123 Main Street',
      home_city: 'Allentown',
      home_zip: '18101'
    }
  ];
  var serviceCredits = [
    {
      id: 1,
      approver: 'Eli Russ',
      performedAt: moment([2015, 0, 3]),
      description: 'Completed standby for St. Patricks Day 5K from 12:15pm to 1:30pm.'
    },
    {
      id: 2,
      approver: 'Eli Russ',
      performedAt: moment([2015, 0, 3]),
      description: 'Attended Smash Mouth concert standby from 9:00pm to 11:30pm.'
    },
    {
      id: 3,
      approver: 'Eli Russ',
      performedAt: moment([2015, 0, 3]),
      description: 'Completed through the Red Doors MCEMS tabling for the full 2.5 hours.'
    },
    {
      id: 4,
      approver: 'Eli Russ',
      performedAt: moment([2015, 0, 3]),
      description: 'Tabled for MCEMS at the Fall 2015 Activities Fair from 1530 to 1800. Helped crew set up table and recruit interested new members.'
    }
  ];
  var certifications = [
    {
      id: 1,
      type: 'TB Test',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 12])
    },
    {
      id: 2,
      type: 'NREMT',
      number: 'E3198634',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10])
    },
    {
      id: 3,
      type:'Driver&apos;s License',
      number:'E3105BNN96101',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10])
    },
    {
      id: 4,
      type:'CPR',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10])
    },
    {
      id: 5,
      type:'CEVO',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10]),
      number:'123456789'
    },
    {
      id: 6,
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10]),
      type:'IS 100'
    },
    {
      id: 7,
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10]),
      type:'IS 200'
    },
    {
      id: 8,
      type:'IS 700',
      issued: moment([2015, 9, 10]),
      expires: moment([2016, 9, 10])
    }
  ];
  var roles = [
    { id: 1, role: 'Life Member' },
    {
      id: 2,
      role: 'Crew Chief',
      showOnSchedule: true
    },
    { id: 3, role: 'Crew Chief Trainee' },
    {
      id: 4,
      role: 'Driver',
      showOnSchedule: true
    },
    { id: 5, role: 'Driver Trainee' },
    { id: 6, role: 'General Member' },
    { id: 7, role: 'Probationary Member' },
    {
      id: 8,
      role: 'Training Corps',
      showOnSchedule: true
    },
    { id: 9, role: 'Captain' },
    { id: 10, role: 'Lieutenant' },
    { id: 11, role: 'President' },
    { id: 12, role: 'Secretary' },
    { id: 13, role: 'Treasurer' },
    { id: 14, role: 'Corresponding Secretary' },
    { id: 15, role: 'Infection Control Officer' },
    { id: 16, role: 'Technology Officer' },
    { id: 17, role: 'Social Coordinator' },
  ];

  StubDataProvider.Roles = {
    register: function(callback) {
      rolesCallback = callback;
    },
    all: function() {
      return roles;
    },
    create: function(name, showOnSchedule) {
      var role = {
        id: roles.length + 1,
        role: name,
        showOnSchedule: showOnSchedule
      };
      roles = roles.concat([role]);
      rolesCallback(roles);
    },
    update: function(id, newRole) {
      roles = roles.map(function(role) {
        if (role.id === id) {
          return newRole;
        } else {
          return role;
        }
      });
      rolesCallback(roles);
    }
  };

  StubDataProvider.CertificationTypes = {
    register: function(callback) {
      certificationTypesCallback = callback;
    },
    all: function() {
      return certificationTypes;
    },
    create: function(name) {
      var type = {
        id: certificationTypes.length + 1,
        type: name
      };
      certificationTypes = certificationTypes.concat([type]);
      certificationTypesCallback(certificationTypes);
    }
  };

  StubDataProvider.Members = {
    register: function(callback) {
      membersCallback = callback;
    },
    all: function() {
      return members;
    }
  };

  StubDataProvider.ServiceCredits = {
    register: function(callback) {
      serviceCreditsCallback = callback;
    },
    create: function(date, description) {
      var credit = {
        id: serviceCredits.length + 1,
        approver: '',
        name: 'Ron Weasley',
        requestedAt: moment(),
        performedAt: moment(date),
        description: description
      };
      serviceCredits = serviceCredits.concat([credit]);
      serviceCreditsCallback(serviceCredits);
    },
    destroy: function(id) {
      serviceCredits = serviceCredits.filter(function(credit) {
        return (credit.id !== id);
      });
      serviceCreditsCallback(serviceCredits);
    },
    approve: function(id) {
      serviceCredits = serviceCredits.map(function(credit) {
        if (credit.id === id) {
          credit.approver = 'Ron Weasley';
        }
        return credit;
      });
      serviceCreditsCallback(serviceCredits);
    },
    all: function() {
      return serviceCredits;
    }
  };

  StubDataProvider.Certifications = {
    register: function(callback) {
      certificationsCallback = callback;
    },
    all: function() {
      return certifications;
    },
    create: function(type, number, issued, expires) {
      var cert = {
        id: certifications.length + 1,
        approver: '',
        name: 'Ron Weasley',
        type: type,
        number: number,
        issued: moment(issued),
        expires: moment(expires),
        requestedAt: moment()
      };
      certifications = certifications.concat([cert]);
      certificationsCallback(certifications);
    },
    destroy: function(id) {
      certifications = certifications.filter(function(cert) {
        return (cert.id !== id);
      });
      certificationsCallback(certifications);
    },
    approve: function(id) {
      certifications = certifications.map(function(cert) {
        if (cert.id === id) {
          cert.approver = 'Ron Weasley';
        }
        return cert;
      });
      certificationsCallback(certifications);
    }
  };

  window.StubDataProvider = StubDataProvider;
})();

