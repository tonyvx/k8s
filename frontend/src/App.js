import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import { ListRegistrations } from "./components/ListRegistrations";
import { RegistrationForm } from './components/RegistrationForm';

export const RegistrationContext = React.createContext("registration");

const App = () => {
  const [view, setView] = useState("list");
  const [homeAddress1, setHomeAddress1] = useState("");
  const [homeAddrCity, setHomeAddrCity] = useState("");
  const [homeAddrState, setHomeAddrState] = useState("");
  const [homeAddrZip, setHomeAddrZip] = useState("");
  const [homeAddrPhone, setHomeAddrPhone] = useState("");
  const [childResidesWith, setChildResidesWith] = useState("");
  const [childResidesWithRelation, setChildResidesWithRelation] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherPhone, setFatherPhone] = useState("");
  const [motherPhone, setMotherPhone] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");
  const [motherEmail, setMotherEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");

  const intialize = () => {
    setHomeAddress1("");
    setHomeAddrCity("");
    setHomeAddrState("");
    setHomeAddrZip("");
    setHomeAddrPhone("");
    setChildResidesWith("");
    setChildResidesWithRelation("");
    setFatherName("");
    setMotherName("");
    setFatherPhone("");
    setMotherPhone("");
    setFatherEmail("");
    setMotherEmail("");
    setStudentName("");
    setGrade("");
  }
  return (
    <RegistrationContext.Provider value={{intialize, homeAddress1, setHomeAddress1, homeAddrCity, setHomeAddrCity, homeAddrState, setHomeAddrState, homeAddrZip, setHomeAddrZip, homeAddrPhone, setHomeAddrPhone, childResidesWith, setChildResidesWith, childResidesWithRelation, setChildResidesWithRelation, fatherName, setFatherName, motherName, setMotherName, fatherPhone, setFatherPhone, motherPhone, setMotherPhone, fatherEmail, setFatherEmail, motherEmail, setMotherEmail, studentName, setStudentName, grade, setGrade }}>
      <div className="app">
        {view === "list" && <Box sx={{ textAlign: "center", paddingTop: 4, paddingBottom: 4 }}><Button variant="contained" onClick={() => setView("register")}>Add Registration</Button></Box>}
        {view === "register" && <RegistrationForm submitAction={() => setView("list")} />}
        {view === "list" && <ListRegistrations />}
      </div>
    </RegistrationContext.Provider>
  );
}

export default App;