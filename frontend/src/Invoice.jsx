import React, { useState, useEffect } from "react";
import {
  Page,
  Document,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
  BlobProvider,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import axios from "axios";
import TopImage from "./Picture1.jpg";
import SomeLogo from "./logo.jpg";
import OpenSans1 from "./open-sans-600.ttf";
import Plotly from "plotly.js-basic-dist";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/invoice")
      .then((response) => {
        setInvoiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoice data:", error);
      });
  }, []);

  Font.register({
    family: "Open Sans",
    src: OpenSans1,
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    pageContainer: {
      border: 2,
      borderColor: "#b30000",
      margin: 20,
      padding: 20,
      flexGrow: 1,
    },
    section: {
      margin: 5,
      padding: 5,
      alignSelf: "center",
    },
    Headertext: {
      fontFamily: "Open Sans",
      fontSize: 15,
      alignSelf: "center",
      padding: 5,
    },
    TopImage: {
      width: "100%",
      height: "auto",
    },
    ImageLine: {
      backgroundColor: "#b30000",
      height: 4,
      marginTop: 10,
    },
    SomeLogo: {
      width: "20%",
      alignSelf: "center",
      marginTop: 30,
      marginBottom: 20,
      padding: 10,
    },
    HeadingLine: {
      backgroundColor: "#b30000",
      height: 3,
      marginLeft: 25,
      marginRight: 25,
    },
    infoBox: {
      position: "absolute",
      backgroundColor: "#b30000",
      marginTop: 9,
      padding: 10,
      top: "99.99%", // Adjust the top position as needed
      left: 0,
      right: 0,
      border: 1,
      borderColor: "#b30000",
    },
    Footertext: {
      fontWeight: "bolder",
      fontSize: 10,
      color: "white",
    },
    TopLine: {
      backgroundColor: "#b30000",
      height: 3,
      marginLeft: 15,
      marginRight: 15,
    },
    PageOneText: {
      fontSize: 15,
      marginTop: 20,
    },
    BoldText: {
      fontFamily: "Open Sans",
      alignSelf: "center",
      padding: 5,
    },
    PageTwoText: {
      fontSize: 14,
      margin: 5,
      marginTop: 20,
    },
    table: {
      backgroundColor: "white",
    },
    headerCell: {
      fontFamily: "Open Sans",
      alignSelf: "center",
      fontSize: 10,
      backgroundColor: "#333",
      color: "#fff",
      padding: 8,
    },
    cell: {
      fontFamily: "Open Sans",
      alignSelf: "center",
      fontSize: 8,
      padding: 8,
      backgroundColor: "#fff",
    },
  });

  const generateChartImage = () => {
    // Create a Plotly chart
    const data = [
      {
        type: "scatter",
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 4, 5],
        mode: "lines+markers",
        marker: { color: "blue" },
      },
    ];

    const layout = {
      title: "Simple Line Chart",
      xaxis: { title: "X Axis" },
      yaxis: { title: "Y Axis" },
    };

    // Convert the Plotly chart to an image (PNG format)
    const chartImage = Plotly.toImage(
      { data, layout },
      { format: "png", width: 400, height: 300 }
    );

    return chartImage;
  };
  const chartImage = generateChartImage();

  const rows = [
    {
      firstName: "Alice",
      lastName: "Johnson",
      dob: new Date(1995, 2, 15).toLocaleDateString(),
      country: "USA",
      phoneNumber: "123-456-7890",
      email: "alice@example.com",
      address: "123 Main St",
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      dob: new Date(1988, 7, 3).toLocaleDateString(),
      country: "Canada",
      phoneNumber: "987-654-3210",
      email: "bob@example.com",
      address: "456 Elm St",
    },
    {
      firstName: "Eve",
      lastName: "Taylor",
      dob: new Date(1990, 5, 20).toLocaleDateString(),
      country: "UK",
      phoneNumber: "555-123-4567",
      email: "eve@example.com",
      address: "789 Oak St",
    },
    {
      firstName: "David",
      lastName: "Brown",
      dob: new Date(1985, 10, 8).toLocaleDateString(),
      country: "Australia",
      phoneNumber: "123-987-6543",
      email: "david@example.com",
      address: "101 Pine St",
    },
    {
      firstName: "Grace",
      lastName: "Wilson",
      dob: new Date(1992, 3, 12).toLocaleDateString(),
      country: "New Zealand",
      phoneNumber: "987-123-4567",
      email: "grace@example.com",
      address: "222 Cedar St",
    },
    {
      firstName: "John",
      lastName: "Davis",
      dob: new Date(1983, 11, 22).toLocaleDateString(),
      country: "Ireland",
      phoneNumber: "123-555-7890",
      email: "john@example.com",
      address: "333 Birch St",
    },
    {
      firstName: "Laura",
      lastName: "Lee",
      dob: new Date(1998, 9, 5).toLocaleDateString(),
      country: "Canada",
      phoneNumber: "555-987-3210",
      email: "laura@example.com",
      address: "444 Maple St",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      dob: new Date(1991, 4, 16).toLocaleDateString(),
      country: "USA",
      phoneNumber: "123-555-9876",
      email: "michael@example.com",
      address: "555 Spruce St",
    },
    {
      firstName: "Olivia",
      lastName: "Clark",
      dob: new Date(1987, 1, 9).toLocaleDateString(),
      country: "Australia",
      phoneNumber: "555-123-7890",
      email: "olivia@example.com",
      address: "666 Fir St",
    },
    {
      firstName: "Sophia",
      lastName: "Johnson",
      dob: new Date(1982, 8, 30).toLocaleDateString(),
      country: "Canada",
      phoneNumber: "123-987-6543",
      email: "sophia@example.com",
      address: "777 Redwood St",
    },
    {
      firstName: "William",
      lastName: "Taylor",
      dob: new Date(1980, 6, 27).toLocaleDateString(),
      country: "UK",
      phoneNumber: "555-555-3210",
      email: "william@example.com",
      address: "888 Sequoia St",
    },
    {
      firstName: "Liam",
      lastName: "Miller",
      dob: new Date(1994, 10, 18).toLocaleDateString(),
      country: "USA",
      phoneNumber: "123-123-9876",
      email: "liam@example.com",
      address: "999 Elm St",
    },
    {
      firstName: "Emily",
      lastName: "White",
      dob: new Date(1989, 12, 4).toLocaleDateString(),
      country: "Australia",
      phoneNumber: "555-555-7890",
      email: "emily@example.com",
      address: "111 Oak St",
    },
    {
      firstName: "James",
      lastName: "Davis",
      dob: new Date(1986, 2, 25).toLocaleDateString(),
      country: "Canada",
      phoneNumber: "123-123-6543",
      email: "james@example.com",
      address: "222 Maple St",
    },
    {
      firstName: "Ava",
      lastName: "Williams",
      dob: new Date(1997, 7, 7).toLocaleDateString(),
      country: "USA",
      phoneNumber: "555-555-9876",
      email: "ava@example.com",
      address: "333 Cedar St",
    },
    {
      firstName: "Noah",
      lastName: "Brown",
      dob: new Date(1984, 5, 13).toLocaleDateString(),
      country: "UK",
      phoneNumber: "123-123-7890",
      email: "noah@example.com",
      address: "444 Pine St",
    },
    {
      firstName: "Mia",
      lastName: "Martin",
      dob: new Date(1993, 3, 2).toLocaleDateString(),
      country: "Australia",
      phoneNumber: "555-123-6543",
      email: "mia@example.com",
      address: "555 Oak St",
    },
    {
      firstName: "Benjamin",
      lastName: "Harris",
      dob: new Date(1996, 9, 23).toLocaleDateString(),
      country: "Canada",
      phoneNumber: "123-555-9876",
      email: "benjamin@example.com",
      address: "666 Cedar St",
    },
    {
      firstName: "Charlotte",
      lastName: "Wilson",
      dob: new Date(1999, 1, 7).toLocaleDateString(),
      country: "USA",
      phoneNumber: "555-123-7890",
      email: "charlotte@example.com",
      address: "777 Elm St",
    },
  ];

  // You now have 20 rows with extended data

  const columns = [
    { label: "First Name", dataKey: "firstName" },
    { label: "Last Name", dataKey: "lastName" },
    { label: "DOB", dataKey: "dob" },
    { label: "Country", dataKey: "country" },
    { label: "Phone Number", dataKey: "phoneNumber" },
    { label: "Email", dataKey: "email" }, // Additional column
    { label: "Address", dataKey: "address" }, // Additional column
  ];

  const splitRowsIntoSections = (rows) => {
    const sections = [];
    const rowsPerPage = 10; // Number of rows for the first page
    let currentIndex = 0;
  
    // Add rows for the first page
    sections.push(rows.slice(currentIndex, currentIndex + rowsPerPage));
    currentIndex += rowsPerPage;
  
    // Add rows for the subsequent pages (15 rows per page)
    while (currentIndex < rows.length) {
      sections.push(rows.slice(currentIndex, currentIndex + 18));
      currentIndex += 15;
    }
  
    return sections;
  };
  
  const sections = splitRowsIntoSections(rows);
  

  return (
    <div>
      {invoiceData ? (
        <PDFViewer width="100%" height="500">
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.pageContainer}>
                <Image src={TopImage} style={styles.TopImage} />
                <View style={styles.ImageLine} />
                <Image src={SomeLogo} style={styles.SomeLogo} />
                <View style={styles.HeadingLine} />
                <View style={styles.section}>
                  <Text style={styles.Headertext}>
                    {invoiceData.customer.name} SLA Report -
                  </Text>
                  <Text style={styles.Headertext}>
                    {invoiceData.customer.address}
                  </Text>
                </View>
                <View style={styles.HeadingLine} />
                <View style={styles.infoBox}>
                  <Text style={styles.Footertext}>@LoremIpsum</Text>
                </View>
              </View>
            </Page>

            {sections.map((section, index) => (
              <Page key={index} size="A4" style={styles.page}>
                <View
                  style={
                    index === 0 ? styles.pageContainer : styles.pageContainer
                  }
                >
                  {index === 0 && (
                    <View>
                      <View style={styles.TopLine} />
                      <View style={styles.section}>
                        <Text style={styles.PageTwoText}>
                          <Text style={styles.BoldText}>
                            SERVER AVAILABILITY
                          </Text>{" "}
                          (Report covers from 01/09/2023 - 30/09/2023)
                        </Text>
                      </View>
                      <View>
                        <Text style={{ display: "flex", flexDirection: "row" }}>
                          <Text style={{ flex: 1 }}>
                            <Image
                              src={chartImage}
                              style={{ width: 250, height: 250 }}
                            />
                          </Text>
                          <Text style={{ flex: 1 }}>
                            <Image
                              src={chartImage}
                              style={{ width: 250, height: 250 }}
                            />
                          </Text>
                        </Text>
                      </View>
                    </View>
                  )}
                  <View wrap style={styles.table}>
                    <Table data={section}>
                      <TableHeader>
                        {columns.map((header) => (
                          <TableCell
                            style={styles.headerCell}
                            key={header.dataKey}
                          >
                            {header.label}
                          </TableCell>
                        ))}
                      </TableHeader>
                      <TableBody>
                        {columns.map((header) => (
                          <DataTableCell
                            style={styles.cell}
                            key={header.dataKey}
                            getContent={(r) => r[header.dataKey]}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </View>
                </View>
              </Page>
            ))}
            {sections.map((section, index) => (
              <Page key={index} size="A4" style={styles.page}>
                <View
                  style={
                    index === 0 ? styles.pageContainer : styles.pageContainer
                  }
                >
                  {index === 0 && (
                    <View>
                      <View style={styles.TopLine} />
                      <View style={styles.section}>
                        <Text style={styles.PageTwoText}>
                          <Text style={styles.BoldText}>
                            APPLICATION SERVICES AVAILABILITY
                          </Text>{" "}
                          (Report covers from 01/09/2023 - 30/09/2023)
                        </Text>
                      </View>
                      <View>
                        <Text style={{ display: "flex", flexDirection: "row" }}>
                          <Text style={{ flex: 1 }}>
                            <Image
                              src={chartImage}
                              style={{ width: 250, height: 250 }}
                            ></Image>
                          </Text>
                          <Text style={{ flex: 1 }}>
                            <Image
                              src={chartImage}
                              style={{ width: 250, height: 250 }}
                            ></Image>
                          </Text>
                        </Text>
                      </View>
                    </View>
                  )}
                  <View wrap style={styles.table}>
                    <Table data={section}>
                      <TableHeader>
                        {columns.map((header) => (
                          <TableCell
                            style={styles.headerCell}
                            key={header.dataKey}
                          >
                            {header.label}
                          </TableCell>
                        ))}
                      </TableHeader>
                      <TableBody>
                        {columns.map((header) => (
                          <DataTableCell
                            style={styles.cell}
                            key={header.dataKey}
                            getContent={(r) => r[header.dataKey]}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </View>
                </View>
              </Page>
            ))}

          </Document>
        </PDFViewer>
      ) : (
        <p>Loading invoice data...</p>
      )}
    </div>
  );
};

export default Invoice;
