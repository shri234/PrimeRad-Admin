import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Spinner, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Chart from "react-apexcharts";
import Card from "../../components/partials/dashboard/bootstrap/card";
import useDataTable from "../../hooks/useDatatable";

// Import your API functions
import {
  getSessions,
  getModules,
  getPathologies,
  getFaculty,
  getPackages,
  API_BASE,
} from "../../utilities/api";

const Dashboard = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    sessions: [],
    modules: [],
    pathologies: [],
    faculties: [],
    packages: [],
  });

  const tableRef = useRef(null);

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          sessionsRes,
          modulesRes,
          pathologiesRes,
          facultiesRes,
          packagesRes,
        ] = await Promise.all([
          getSessions().catch(() => ({ data: { data: [] } })),
          getModules().catch(() => ({ data: { data: [] } })),
          getPathologies().catch(() => ({ data: { data: [] } })),
          getFaculty().catch(() => ({ data: { data: [] } })),
          getPackages().catch(() => ({ data: { data: [] } })),
        ]);

        setDashboardData({
          sessions: Array.isArray(sessionsRes.data.data)
            ? sessionsRes.data.data
            : [],
          modules: Array.isArray(modulesRes.data.data)
            ? modulesRes.data.data
            : [],
          pathologies: Array.isArray(pathologiesRes.data.data)
            ? pathologiesRes.data.data
            : [],
          faculties: Array.isArray(facultiesRes.data.data)
            ? facultiesRes.data.data
            : [],
          packages: Array.isArray(packagesRes.data.data)
            ? packagesRes.data.data
            : [],
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate statistics
  const stats = {
    totalSessions: dashboardData.sessions.length,
    totalModules: dashboardData.modules.length,
    totalPathologies: dashboardData.pathologies.length,
    totalFaculties: dashboardData.faculties.length,
    totalPackages: dashboardData.packages.length,
    dicomSessions: dashboardData.sessions.filter(
      (s) => s.sessionType === "Dicom"
    ).length,
    vimeoSessions: dashboardData.sessions.filter(
      (s) => s.sessionType === "Vimeo"
    ).length,
    liveSessions: dashboardData.sessions.filter((s) => s.videoType === "Live")
      .length,
    recordedSessions: dashboardData.sessions.filter(
      (s) => s.videoType === "Recorded"
    ).length,
    assessmentSessions: dashboardData.sessions.filter(
      (s) => s.isAssessment === true
    ).length,
    freeSessions: dashboardData.sessions.filter((s) => s.isFree === true)
      .length,
  };

  // Module-wise session breakdown
  const moduleWiseData = dashboardData.modules
    .map((module) => ({
      name: module.moduleName || module.name,
      sessions: dashboardData.sessions.filter(
        (s) => s.moduleName === (module.moduleName || module.name)
      ).length,
    }))
    .filter((item) => item.sessions > 0);

  // Session type breakdown
  const sessionTypeData = [
    { name: "DICOM Cases", value: stats.dicomSessions, color: "#6a11cb" },
    { name: "Vimeo Lectures", value: stats.vimeoSessions, color: "#2575fc" },
    { name: "Live Programs", value: stats.liveSessions, color: "#14e788" },
    { name: "Recorded", value: stats.recordedSessions, color: "#f68a04" },
  ].filter((item) => item.value > 0);

  // Difficulty level breakdown
  const difficultyData = [
    {
      name: "Beginner",
      value: dashboardData.sessions.filter((s) => s.difficulty === "beginner")
        .length,
      color: "#14e788",
    },
    {
      name: "Intermediate",
      value: dashboardData.sessions.filter(
        (s) => s.difficulty === "intermediate"
      ).length,
      color: "#f68a04",
    },
    {
      name: "Advanced",
      value: dashboardData.sessions.filter((s) => s.difficulty === "advanced")
        .length,
      color: "#e20e02",
    },
  ].filter((item) => item.value > 0);

  // Recent sessions for table
  const recentSessions = dashboardData.sessions
    .sort(
      (a, b) =>
        new Date(b.createdAt || b.startDate) -
        new Date(a.createdAt || a.startDate)
    )
    .slice(0, 10)
    .map((session) => ({
      title: session.title || "Untitled",
      module: session.moduleName || "N/A",
      type: session.sessionType || "N/A",
      difficulty: session.difficulty || "N/A",
      date: new Date(
        session.createdAt || session.startDate
      ).toLocaleDateString(),
      status: session.isAssessment ? "Assessment" : "Regular",
      access: session.isFree ? "Free" : "Paid",
    }));

  // DataTable columns
  const columns = useRef([
    { data: "title", title: "Session Title" },
    { data: "module", title: "Module" },
    { data: "type", title: "Type" },
    { data: "difficulty", title: "Difficulty" },
    { data: "date", title: "Date" },
    { data: "status", title: "Status" },
    { data: "access", title: "Access" },
  ]);

  useDataTable({
    tableRef: tableRef,
    columns: columns.current,
    data: recentSessions,
  });

  // Chart configurations
  const moduleChart = {
    options: {
      chart: { id: "module-chart", type: "donut" },
      colors: [
        "#6a11cb",
        "#2575fc",
        "#14e788",
        "#f68a04",
        "#e20e02",
        "#545e75",
      ],
      labels: moduleWiseData.map((item) => item.name),
      dataLabels: { enabled: true },
      legend: { show: true, position: "bottom" },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
    series: moduleWiseData.map((item) => item.sessions),
  };

  const sessionTypeChart = {
    options: {
      chart: { id: "session-type-chart", type: "pie" },
      colors: sessionTypeData.map((item) => item.color),
      labels: sessionTypeData.map((item) => item.name),
      dataLabels: { enabled: true },
      legend: { show: true, position: "bottom" },
    },
    series: sessionTypeData.map((item) => item.value),
  };

  const difficultyChart = {
    options: {
      chart: { id: "difficulty-chart", type: "bar" },
      colors: difficultyData.map((item) => item.color),
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: difficultyData.map((item) => item.name),
      },
      yaxis: { title: { text: "Number of Sessions" } },
    },
    series: [
      {
        name: "Sessions",
        data: difficultyData.map((item) => item.value),
      },
    ],
  };

  // Widget data
  const widgets = [
    {
      label: "Total Sessions",
      value: stats.totalSessions,
      color: "#6a11cb",
      icon: "📚",
      link: "/lists/sessions",
    },
    {
      label: "Active Modules",
      value: stats.totalModules,
      color: "#2575fc",
      icon: "📁",
      link: "/lists/modules",
    },
    {
      label: "Pathologies",
      value: stats.totalPathologies,
      color: "#14e788",
      icon: "🩺",
      link: "/lists/pathologies",
    },
    {
      label: "Faculty Members",
      value: stats.totalFaculties,
      color: "#f68a04",
      icon: "👨‍⚕️",
      link: "/lists/faculty",
    },
    {
      label: "DICOM Cases",
      value: stats.dicomSessions,
      color: "#e20e02",
      icon: "🔬",
    },
    {
      label: "Video Lectures",
      value: stats.vimeoSessions,
      color: "#545e75",
      icon: "🎥",
    },
    {
      label: "Assessment Sessions",
      value: stats.assessmentSessions,
      color: "#8e44ad",
      icon: "📝",
    },
    {
      label: "Available Packages",
      value: stats.totalPackages,
      color: "#16a085",
      icon: "📦",
      link: "/lists/packages",
    },
  ];

  if (loading) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Fragment>
      <Container
        fluid
        style={{
          // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh",
          padding: "2rem 0",
        }}
      >
        {/* Header */}
        <Row className="mb-1">
          <Col>
            <div className="text-center text-white">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                PrimeRad Dashboard
              </h1>
              <p style={{ fontSize: "1.2rem", opacity: 0.9, color: "navy" }}>
                Comprehensive overview of your medical education platform
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          {widgets.map((widget, idx) => (
            <Col sm="6" lg="3" key={widget.label} className="mb-3">
              <Card
                className="shadow-lg border-0 h-100"
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.95)",
                  cursor: widget.link ? "pointer" : "default",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={() =>
                  widget.link && (window.location.href = widget.link)
                }
              >
                <Card.Body
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: 140 }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    {widget.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: widget.color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {widget.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#333",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    {widget.label}
                  </div>
                  {widget.link && (
                    <Badge
                      bg="primary"
                      className="mt-2"
                      style={{ fontSize: "0.7rem" }}
                    >
                      View Details
                    </Badge>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Charts Row */}
        <Row className="mb-4">
          {/* Module-wise Distribution */}
          <Col lg="4" className="mb-3">
            <Card
              className="shadow-lg border-0 h-100"
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.98)",
              }}
            >
              <Card.Header className="d-flex justify-content-between align-items-center pb-0">
                <h4
                  className="card-title m-0"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  Sessions by Module
                </h4>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                {moduleWiseData.length > 0 ? (
                  <Chart
                    id="module-chart"
                    options={moduleChart.options}
                    series={moduleChart.series}
                    type="donut"
                    width="300"
                  />
                ) : (
                  <div className="text-center text-muted p-4">
                    <p>No module data available</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Session Type Distribution */}
          <Col lg="4" className="mb-3">
            <Card
              className="shadow-lg border-0 h-100"
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.98)",
              }}
            >
              <Card.Header className="d-flex justify-content-between align-items-center pb-0">
                <h4
                  className="card-title m-0"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  Session Types
                </h4>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                {sessionTypeData.length > 0 ? (
                  <Chart
                    id="session-type-chart"
                    options={sessionTypeChart.options}
                    series={sessionTypeChart.series}
                    type="pie"
                    width="300"
                  />
                ) : (
                  <div className="text-center text-muted p-4">
                    <p>No session type data available</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Difficulty Level Distribution */}
          <Col lg="4" className="mb-3">
            <Card
              className="shadow-lg border-0 h-100"
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.98)",
              }}
            >
              <Card.Header className="d-flex justify-content-between align-items-center pb-0">
                <h4
                  className="card-title m-0"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  Difficulty Levels
                </h4>
              </Card.Header>
              <Card.Body>
                {difficultyData.length > 0 ? (
                  <Chart
                    id="difficulty-chart"
                    options={difficultyChart.options}
                    series={difficultyChart.series}
                    type="bar"
                    height="250"
                  />
                ) : (
                  <div className="text-center text-muted p-4">
                    <p>No difficulty data available</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Sessions Table */}
        <Row>
          <Col sm="12">
            <Card
              className="shadow-lg border-0"
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.98)",
              }}
            >
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h4
                  className="card-title m-0"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  Recent Sessions
                </h4>
                <Link
                  to="/lists/sessions"
                  className="btn btn-primary btn-sm"
                  style={{ borderRadius: "0.75rem" }}
                >
                  View All Sessions
                </Link>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive table-view table-space">
                  {recentSessions.length > 0 ? (
                    <table
                      id="datatable"
                      ref={tableRef}
                      className="data-tables table custom-table"
                      data-toggle="data-table"
                    ></table>
                  ) : (
                    <div className="text-center text-muted p-4">
                      <p>No sessions found</p>
                      <Link to="/create/sessions" className="btn btn-primary">
                        Create First Session
                      </Link>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
