import axios from "axios";

export const API_BASE = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

export const getSessions = () => api.get("/api/sessions/get");
export const createSession = (data) =>
  api.post("/api/sessions/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getModules = () => api.get("/api/modules/get");
export const createModule = (data) =>
  api.post("/api/modules/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getAssessmentQuestions = () => api.get("/api/assessment/get");
export const getAssessmentQuestionById = (id) =>
  api.get(`/api/assessment/get/${id}`);
export const createAssessmentQuestion = (data) =>
  api.post("/api/assessment/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateAssessmentQuestion = (id, data) =>
  api.put(`/api/assessment/update/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteAssessmentQuestion = (id) =>
  api.delete(`/api/assessment/delete/${id}`);

export const getFaculty = () => api.get("/api/faculty/get");
export const getFacultyById = (id) => api.get(`/api/faculty/get/${id}`);
export const createFaculty = (data) =>
  api.post("/api/faculty/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateFaculty = (id, data) =>
  api.put(`/api/faculty/update/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteFaculty = (id) => api.delete(`/api/faculty/delete/${id}`);

// Session Resources
export const getSessionResources = () => api.get("/session-resources/get");
export const createSessionResource = (data) =>
  api.post("/session-resources/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getPackages = () => api.get("/session-resources/get");
export const createPackage = (data) =>
  api.post("/session-resources/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Phases
export const getPhases = () => api.get("/phases/get");
export const createPhase = (data) =>
  api.post("/phases/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Categories
export const getCategories = () => api.get("/categories/get");
export const createCategory = (data) =>
  api.post("/categories/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Pathologies
export const getPathologies = () => api.get("/api/pathologies/get");
export const getPathologiesByModule = (moduleId) =>
  api.get(`/api/pathologies/getByModule?moduleId=${moduleId}`);
export const createPathology = (data, moduleId) =>
  api.post(
    `/api/pathologies/create${moduleId ? `?moduleId=${moduleId}` : ""}`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

// Dicom Observation Titles
export const getDicomObservationTitles = () => api.get("/api/observation/get");
export const createDicomObservationTitles = (data) =>
  api.post("/api/dicom-observation-titles/create", data, {
    headers: { "Content-Type": "application/json" },
  });

export const createObservation = (data) =>
  api.post("/api/observation/create", data, {
    headers: { "Content-Type": "application/json" },
  });

export const updateObservation = (id, data) =>
  api.put(`/api/observation/update/${id}`, data, {
    headers: { "Content-Type": "application/json" },
  });

export const getObservationsBySession = (sessionId) =>
  api.get(`/api/observation/getBySession?sessionId=${sessionId}`);
