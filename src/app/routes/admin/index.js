import Dashboard from "../../views/admin/dashboard";
import UsersList from "../../views/admin/users/index";
import OrderList from "../../views/admin/orders/index" ;
import Pages from "../../views/admin/pages";
import Login from "../../views/admin/Login/index";
import EmployeeList from "../../views/admin/Employees/EmployeeList/index"
import CompanyList from "../../views/admin/Company/CompanyList/index"
import CreateCompany from "../../views/admin/Company/CreateCompany/index"
import PropertyList from "../../views/admin/Property/PropertyList/index"
import JobRequestList from "../../views/admin/Jobs/JobRequest/JobRequestList/index"
import JobsList from "../../views/admin/Jobs/JobsList/index"
import CreateEmployee from "../../views/admin/Employees/CreateEmployee/index"

const AdminRoutes = [
  {
    path: "/login",
    component: <Login />
  },
  {
    path: "/dashboard",
    component: <Dashboard />
  },
  {
    path: "/employees",
    component: <EmployeeList />
  },
  {
    path: "/employee/create",
    component: <CreateEmployee />
  },
  {
    path: "/companies",
    component: <CompanyList />
  },
  {
    path: "/createcompany",
    component: <CreateCompany />
  },
  {
    path: "/properties",
    component: <PropertyList />
  },
  {
    path: "/jobrequest",
    component: <JobRequestList />
  },
  {
    path: "/jobs",
    component: <JobsList />
  },
];

export default AdminRoutes;