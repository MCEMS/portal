var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-htmlmin');
var minifyCss = require('gulp-cssnano');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('static', function() {
  return gulp.src([
    './static/**/*',
    './static/**/.*'
  ]).pipe(gulp.dest('./dist'));
});

gulp.task('compileJsx', function() {
  return gulp.src([
    // utilities
    'src/jsx/RelativeTime.jsx',
    'src/jsx/Icon.jsx',
    'src/jsx/Button.jsx',

    // approval queue
    'src/jsx/QueueItem.jsx',
    'src/jsx/RoleRequestQueueItem.jsx',
    'src/jsx/CertificationQueueItem.jsx',
    'src/jsx/ServiceCreditQueueItem.jsx',
    'src/jsx/ApprovalQueue.jsx',
    'src/jsx/UpcomingShift.jsx',
    'src/jsx/UpcomingShifts.jsx',

    // profile page components
    'src/jsx/ExpiringCert.jsx',
    'src/jsx/ExpiringCerts.jsx',
    'src/jsx/MemberCertification.jsx',
    'src/jsx/MemberCertifications.jsx',
    'src/jsx/MemberHistoryItem.jsx',
    'src/jsx/MemberHistory.jsx',
    'src/jsx/MemberInfoEdit.jsx',
    'src/jsx/MemberServiceCredit.jsx',
    'src/jsx/MemberServiceCredits.jsx',

    // settings page components
    'src/jsx/SettingsCertRow.jsx',
    'src/jsx/SettingsCerts.jsx',
    'src/jsx/SettingsRoleRow.jsx',
    'src/jsx/SettingsRoles.jsx',

    // calendar components
    'src/jsx/CalendarMonthView.jsx',
    'src/jsx/CalendarShift.jsx',
    'src/jsx/CalendarSingleDay.jsx',

    // pages
    'src/jsx/AccountsPage.jsx',
    'src/jsx/ApplicationsPage.jsx',
    'src/jsx/BroadcastPage.jsx',
    'src/jsx/CalendarPage.jsx',
    'src/jsx/MembersPage.jsx',
    'src/jsx/ProfilePage.jsx',
    'src/jsx/SettingsPage.jsx',

    // global components
    'src/jsx/NavTab.jsx',
    'src/jsx/App.jsx',

    // bootstrap the app
    'src/jsx/_bootstrap.jsx'
  ]).pipe(babel())
    .pipe(concat('jsx.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('compileScss', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('minifyJs', [ 'concatJs' ], function() {
  return gulp.src('dist/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('concatJs', [ 'compileJsx', 'bower' ], function() {
  return gulp.src([
    'build/react.js',
    'build/react-dom.js',
    'build/moment.min.js',
    'src/js/*',
    'build/jsx.js'
  ]).pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bower', function() {
  return gulp.src([
    './bower_components/react/react.js',
    './bower_components/react/react-dom.js',
    './bower_components/moment/min/moment.min.js',
    './bower_components/bootstrap/dist/css/bootstrap.min.css'
  ]).pipe(gulp.dest('build'));
});

gulp.task('minifyHtml', function() {
  return gulp.src('src/html/*')
    .pipe(minifyHtml({
      quotes: true,
      empty: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyCss', [ 'bower', 'compileScss' ], function() {
  return gulp.src([
    'build/bootstrap.min.css',
    'build/app.css'
  ]).pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', [ 'bower' ], function() {
  return gulp.src('bower_components/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', [ 'buildDev', 'minifyJs' ]);

gulp.task('buildDev', [
  'static',
  'concatJs',
  'minifyHtml',
  'minifyCss',
  'fonts'
]);

gulp.task('server', function() {
  return gulp.src('dist').pipe(webserver());
});

gulp.task('watch', [ 'server' ], function() {
  return gulp.watch('src/**/*', [ 'buildDev' ]);
});
