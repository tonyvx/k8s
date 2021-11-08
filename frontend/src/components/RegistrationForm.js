import { Button, Divider, FormControl, FormLabel, InputLabel, MenuItem, Radio, Select, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { RegistrationContext } from '../App';

const stateCodes = ["", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
const grades = ["", "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export const RegistrationForm = ({ submitAction }) => {
    const { intialize, fatherName, motherName, fatherPhone, motherPhone, fatherEmail, motherEmail, homeAddress1, homeAddrCity, homeAddrState, homeAddrZip, homeAddrPhone, childResidesWith, childResidesWithRelation, studentName, grade } = React.useContext(RegistrationContext);

    React.useEffect(() => {
        intialize();
    }, []);

    return <>
        <Typography align="center" variant="h4" style={{ padding: 10 }}>Student(s) Registration Form</Typography>
        <Divider />
        <StudentInfo />
        <ParentContact parent="Father" />
        <ParentContact parent="Mother" />
        <AddressInfo />
        <Box sx={{ textAlign: "center", paddingTop: 4, paddingBottom: 4 }}>
            <Button variant="contained" onClick={(e) => submitRegistration({ fatherName, motherName, fatherPhone, motherPhone, fatherEmail, motherEmail, homeAddress1, homeAddrCity, homeAddrState, homeAddrZip, homeAddrPhone, childResidesWith, childResidesWithRelation, studentName, grade }, submitAction)} >Submit</Button></Box>
    </>
}

const AddressInfo = () => {
    const { homeAddress1, setHomeAddress1, homeAddrCity, setHomeAddrCity, homeAddrState, setHomeAddrState, homeAddrZip, setHomeAddrZip, homeAddrPhone, setHomeAddrPhone, childResidesWith, setChildResidesWith, childResidesWithRelation, setChildResidesWithRelation } = React.useContext(RegistrationContext);

    return <>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '40ch', width: "90vw" },
                textAlign: "center",
                paddingTop: 4,
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="home-address"
                label="Home Address"
                name="home_address1"
                value={homeAddress1}
                onChange={(e) => setHomeAddress1(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <TextField
                id="city"
                label="City"
                name="home_addr_city"
                value={homeAddrCity}
                onChange={(e) => setHomeAddrCity(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="state">State</InputLabel>
                <Select
                    labelId="state"
                    id="select-state"
                    name="home_addr_state"
                    value={homeAddrState}
                    onChange={(e) => setHomeAddrState(e.target.value)}
                    autoWidth
                    label="State"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {stateCodes.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField
                id="zip"
                label="Zip"
                name="home_addr_zip"
                value={homeAddrZip}
                onChange={(e) => setHomeAddrZip(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <TextField
                id="phone"
                label="Phone"
                name="home_addr_phone"
                value={homeAddrPhone}
                onChange={(e) => setHomeAddrPhone(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
        </Box>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '40ch', width: "90vw" },
                textAlign: "center",
                paddingTop: 4,
            }}
            noValidate
            autoComplete="off"
        >
            <FormLabel>Child resides with</FormLabel>
            <Radio
                name="child_residence"
                value="parents"
                checked={childResidesWith === "parents"}
                onChange={e => setChildResidesWith(e.target.value)}
                inputProps={{
                    'aria-label': 'Checkbox A',
                }} />
            <FormLabel>Parent(s)</FormLabel>
            <Radio
                name="child_residence"
                value="other"
                checked={childResidesWith === "other"}
                onChange={e => setChildResidesWith(e.target.value)}
                inputProps={{
                    'aria-label': 'Checkbox A',
                }} />
            <FormLabel>Other </FormLabel>
            <TextField
                id="child_residence_other_relationship"
                label="Relationship (if Other)"
                name="child_residence_other_relationship"
                onChange={e => setChildResidesWithRelation(e.target.value)}
                value={childResidesWithRelation}
                InputLabelProps={{
                    shrink: true,
                }} />
        </Box>
    </>;

}

const ParentContact = ({ parent }) => {
    const { fatherName, setFatherName, motherName, setMotherName, fatherPhone, setFatherPhone, motherPhone, setMotherPhone, fatherEmail, setFatherEmail, motherEmail, setMotherEmail } = React.useContext(RegistrationContext);

    const name = parent === "Father" ? fatherName : motherName;
    const setName = parent === "Father" ? setFatherName : setMotherName;
    const phone = parent === "Father" ? fatherPhone : motherPhone;
    const setPhone = parent === "Father" ? setFatherPhone : setMotherPhone;
    const email = parent === "Father" ? fatherEmail : motherEmail;
    const setEmail = parent === "Father" ? setFatherEmail : setMotherEmail;
    return <>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '40ch', width: "90vw" },
                textAlign: "center",
                paddingTop: 4
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id={`${parent}-name`}
                label={`${parent}'s Name`}
                name={`${parent.toLowerCase()}_name`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <TextField
                id={`${parent}-phone`}
                label="Cell/Work"
                name={`${parent.toLowerCase()}_phone`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <TextField
                id={`${parent}-email`}
                label="Email"
                name={`${parent.toLowerCase()}_email`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
        </Box>
    </>;
}

const StudentInfo = () => {
    const { studentName, setStudentName, grade, setGrade } = React.useContext(RegistrationContext);

    return <>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '40ch', width: "90vw" },
                textAlign: "center",
                paddingTop: 4
            }}
            noValidate
            autoComplete="off"
            alignContent="center"
        >
            <TextField
                id="student-name"
                label="Student Name"
                name="student_name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="school-grade">Grade</InputLabel>
                <Select
                    labelId="school-grade"
                    id="select-school-grade"
                    name="school_grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    autoWidth
                    label="Grade"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {grades.map(grade => <MenuItem key={grade} value={grade}>{grade}</MenuItem>)}
                </Select>
            </FormControl>

        </Box>
    </>;
}

const submitRegistration = async (registrationInfo, submitAction) => {
    const response = await fetch("/registrations", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationInfo)
    }
    );
    const json = await response.json();
    console.log(json);
    submitAction();
}

