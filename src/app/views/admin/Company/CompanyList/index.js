import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  FormControl,
  Box,
  Select,
  Typography,
  Button,
  MenuItem,
  TablePagination,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestoreIcon from "@mui/icons-material/Restore";
import { styled } from "@mui/system";

import Colors from "../../../../assets/styles";
import { Svgs } from "../../../../assets/images";
import { useNavigate, useLocation } from "react-router-dom";
import useProvideBreadCrumb from "../../../../hooks/useProvideBreadCrumb";

const initialData = [
  {
    name: "Christine Brooks",
    phone: "+123 4567 8901",
    email: "christine321@gmail.com",
    location:"USA",
    status: "active",
    
  },
  {
    name: "Rosie Pearson",
    phone: "+123 4567 8901",
    email: "rpearson@gmail.com",
    location:"USA",
    status: "inactive",
    
  },
  {
      phone: "+123 4567 8901",
    name: "Darrell Caldwell",
    email: "caldwell897@yahoo.com",
    location:"USA",
    status: "active",
    
  },
  {
    name: "Gilbert Johnston",
    phone: "+123 4567 8901",
    email: "johnston432@outlook.com",
    location:"USA",
    status: "inactive",
    
  },
  {
    name: "Alan Cain",
    phone: "+123 4567 8901",
    email: "alancain1@gmail.com",
    location:"USA",
    status: "inactive",
    
  },
  {
    name: "Alfred Murray",
    phone: "+123 4567 8901",
    email: "alfredmurray@gmail.com",
    location:"USA",
    status: "active",
    
  },
  {
    name: "Alfred Murray",
    phone: "+123 4567 8901",
    email: "alfredmurray@gmail.com",
    location:"USA",
    status: "active",
    
  },
  {
    name: "Alfred Murray",
    phone: "+123 4567 8901",
    email: "alfredmurray@gmail.com",
    location:"USA",
    status: "active",
    
  },
  // Add more data as needed
];

const tableHead = [
  "Name",
  "Phone",
  "Email",
  "Location",
  "Status",
  "Action",
];

const CustomSelect = styled(Select)({
  "&.MuiSelect-root": {
    border: "none",
    outline: "none",
    boxShadow: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: "black",
  },
  "& .MuiSelect-select": {
    padding: "8px 32px 8px 8px",
  },
});

const App = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(0); // Adjusted to 0-based index
  const [dateJoined, setDateJoined] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  
  const rowsPerPage = 6 ;
  const navigate = useNavigate()
  

  const handleReset = () => {
    setDateJoined("");
    setRole("");
    setId("");
  };

  const handleSearch = () => {
    console.log("Search with filters:", { dateJoined, role, id });
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) &&
      (statusFilter ? item.status === statusFilter : true)
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
 
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 8,
          pl: 2,
        }}
      >
        <Typography
          sx={{ fontSize: "26px", color: Colors.primary, fontWeight: "600" }}
        >
          Companies
        </Typography>
        <Button onClick={()=>navigate("/createcompany")} variant="contained" color="primary" sx={{ mx: 1 }}>
          Add New
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap:"25px"
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          // justifyContent="flex-start"
          sx={{ mt: 3, pl: 2 }}
          bgcolor={Colors.backgroundColor}
          borderRadius={2}
          border="1px solid rgba(10, 10, 10, 0.1)"
          boxShadow="0xp 0px 100px 0xp rgba(0,0,0,0.1)"
        >
          <FilterAltIcon />
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "lightgray",
              mx: 1,
            }}
          />
          <Box sx={{ px: 2 }}>Filter By</Box>
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "lightgray",
              mx: 1,
            }}
          />

          <FormControl sx={{ minWidth: 120, mx: 1 }}>
            <CustomSelect
              displayEmpty
              value={dateJoined}
              onChange={(e) => setDateJoined(e.target.value)}
              renderValue={(selected) => (selected ? selected : "Date Joined")}
            >
              <MenuItem value="">Date Joined</MenuItem>
              <MenuItem value="Last Week">Last Week</MenuItem>
              <MenuItem value="Last Month">Last Month</MenuItem>
              <MenuItem value="Last Year">Last Year</MenuItem>
            </CustomSelect>
          </FormControl>

          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "lightgray",
              mx: 1,
            }}
          />

          <FormControl sx={{ minWidth: 120, mx: 1 }}>
            <CustomSelect
              displayEmpty
              value={role}
              onChange={(e) => setRole(e.target.value)}
              renderValue={(selected) => (selected ? selected : "Role")}
            >
              <MenuItem value="">Role</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Guest">Guest</MenuItem>
            </CustomSelect>
          </FormControl>

          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "lightgray",
              mx: 1,
            }}
          />

          <FormControl sx={{ minWidth: 120, mx: 1 }}>
            <CustomSelect
              displayEmpty
              value={id}
              onChange={(e) => setId(e.target.value)}
              renderValue={(selected) => (selected ? selected : "ID")}
            >
              <MenuItem value="">ID</MenuItem>
              <MenuItem value="Admin">123123</MenuItem>
              <MenuItem value="User">124124r</MenuItem>
              <MenuItem value="Guest">12341</MenuItem>
            </CustomSelect>
          </FormControl>

          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "lightgray",
              mx: 1,
            }}
          />

          <Button
            sx={{ color: Colors.red, mx: 1 }}
            startIcon={<RestoreIcon />}
            onClick={handleReset}
          >
            Reset Filter
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ mt: 2.7 }}
        >
          Search
        </Button>
      </Box>
      <TableContainer
        sx={{
          mt: 2,
          backgroundColor: Colors.backgroundColor,
          borderRadius: "10px",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              {tableHead.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{ fontWeight: "600", color: Colors.black,textAlign:"center" }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row,index) => (
              <TableRow key={index}>
              
                <TableCell sx={{textAlign:"center"}}>{row.name}</TableCell>
                <TableCell sx={{textAlign:"center"}}>{row.phone}</TableCell>
                <TableCell sx={{textAlign:"center"}}>{row.email}</TableCell>
                <TableCell sx={{textAlign:"center"}}>{row.location}</TableCell>
                <TableCell sx={{textAlign:"center"}}>
                  <Typography
                    sx={{
                      backgroundColor:
                        row.status === "active"
                          ? Colors.seaGreen
                          : Colors.red,
                      borderRadius: "20px",
                      textAlign: "center",
                    
                      py: 0.5,
                      color: Colors.white,
                      fontSize: "12px",
                      textTransform:"capitalize "
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
               
                <TableCell sx={{textAlign:"center"}}>
                  <Typography sx={{ display: "flex",justifyContent:"center", gap: "5px" }}>
                    <Box
                      dangerouslySetInnerHTML={{ __html: Svgs["edit"] }}
                    ></Box>
                    <Box
                      dangerouslySetInnerHTML={{ __html: Svgs["delete"] }}
                    ></Box>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
   
     sx={{
       mt: 2    ,
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
     }}
   >
     <Typography sx={{ color: "text.secondary", ml: 2 }}>
       {`Showing ${page * rowsPerPage + 1}-${Math.min(
         (page + 1) * rowsPerPage,
         filteredData.length
       )} of ${filteredData.length}`}
     </Typography>
     <Box>
       <TablePagination
         component={Paper}
         sx={{
           borderBottom: "none",
           border:"1px solid black",            
           bgcolor: "transparent",
           '.MuiTablePagination-toolbar': {
             paddingLeft: 0,
           },
           '.MuiTablePagination-spacer': {
             flex: 'none',
           },
           '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
             display: 'none',
           },
           '.MuiTablePagination-actions': {
             marginLeft: 0,
           },
           '.MuiTablePagination-actions button:first-child': {
             borderRadius:0,
             p:0,
             borderRight:'1px solid black'
           },
         }}
         rowsPerPageOptions={[]} // Removes rows per page selector
         count={filteredData.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handlePageChange}
       />
     </Box>
   </Box>
    </Box>
  );
};

export default App;
