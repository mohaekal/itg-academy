import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Welcome from "./views/Welcome"
import Home from "./views/Home"
import BlogOverview from "./views/BlogOverview";
import ComingSoon from "./views/comingsoon";
import AdminDashboard from "./views/AdminDashboard";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Courses from "./views/courses";
import TestAdmin from "./views/test-admin";
import TestAdminEdit from "./views/test-admin-edit";
import AddCourseAdmin from "./views/add-course-admin";
import AddCourseAdminForm from "./views/add-course-admin-form";
import ExamAdmin from "./views/exam-admin";
import EngDashboard from "./views/dashboard-eng";
import MyCourseEng from "./views/my-course-eng";
import CourseDetailEng from "./views/course-detail-eng";
import TakeTest from "./views/take-test-";
import TestResultEng from "./views/test-result-eng";
import MyExam from "./views/my-exam";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: AdminDashboard
  }
  ,
  {
    path: "/courses",
    layout: DefaultLayout,
    component: Courses
  },
  {
    path: "/test-admin",
    layout: DefaultLayout,
    component: TestAdmin
  },
  {
    path: "/test-admin-edit",
    layout: DefaultLayout,
    component: TestAdminEdit
  },
  {
    path: "/add-course-admin",
    layout: DefaultLayout,
    component: AddCourseAdmin
  },
  {
    path: "/exam-admin",
    layout: DefaultLayout,
    component: ExamAdmin
  },
  {
    path: "/dashboard-engineering",
    layout: DefaultLayout,
    component: EngDashboard
  },
  {
    path: "/my-course-eng",
    layout: DefaultLayout,
    component: MyCourseEng
  },
  {
    path: "/course-detail",
    layout: DefaultLayout,
    component: CourseDetailEng
  },
  {
    path: "/take-test",
    layout: DefaultLayout,
    component: TakeTest
  },
  {
    path: "/test-result-eng",
    layout: DefaultLayout,
    component: TestResultEng
  },
  {
    path: "/my-exam",
    layout: DefaultLayout,
    component: MyExam
  },
  // {
  //   path: "/",
  //   layout: DefaultLayout,
  //   component: ComingSoon
  // }
];
