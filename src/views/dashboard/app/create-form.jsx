import React, { useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Row,
  Col,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  createSession,
  createModule,
  createAssessmentQuestion,
  createFaculty,
  getFacultyById,
  updateFaculty,
  getAssessmentQuestionById,
  updateAssessmentQuestion,
  createSessionResource,
  createPhase,
  createPathology,
  getModules,
  getPathologies,
  getPathologiesByModule,
  getSessions,
  createDicomObservationTitles,
  createObservation,
  getDicomObservationTitles,
  API_BASE,
} from "../../../utilities/api";
import classNames from "classnames";

const formConfigs = {
  modules: {
    title: "Create Modules",
    listLink: "/lists/modules",
    listText: "View list of Modules",
    formTitle: "Create a Module",
    fields: [
      {
        label: "Module Name",
        name: "moduleName",
        type: "text",
        placeholder: "Enter Module Name",
        as: "input",
      },
      {
        label: "Module Description",
        name: "description",
        type: "text",
        placeholder: "Enter Module Description",
        as: "textarea",
      },
      {
        label: "Module Image",
        name: "image",
        type: "file",
        as: "input",
        help: "Select an image with 720x455 pixels. Only JPG, JPEG, PNG & GIF files are allowed. Max file size is 500KB.",
      },
    ],
    submitText: "Submit",
  },
  sessions: {
    title: "Create Sessions",
    listLink: "/lists/sessions",
    listText: "View list of Sessions",
    formTitle: "Create a Session",
    // fields will be generated dynamically based on sessionType
    submitText: "Submit",
  },
  "assessment-questions": {
    title: "Create Assessment Questions",
    listLink: "/lists/assessment-questions",
    listText: "View list of Assessment Questions",
    formTitle: "Create an Assessment Question",
    fields: [
      {
        label: "Select Module",
        name: "module",
        type: "select",
        options: [],
        as: "select",
        col: 6,
      },
      {
        label: "Question",
        name: "question",
        type: "text",
        placeholder: "Enter Assessment Question",
        as: "input",
        col: 12,
      },
      {
        label: "Description",
        name: "description",
        type: "text",
        placeholder: "Enter Session Description",
        as: "textarea",
        col: 12,
      },
      {
        label: "Option A",
        name: "optionA",
        type: "text",
        placeholder: "Enter Answer Option A",
        as: "input",
        col: 6,
      },
      {
        label: "Option B",
        name: "optionB",
        type: "text",
        placeholder: "Enter Answer Option B",
        as: "input",
        col: 6,
      },
      {
        label: "Option C",
        name: "optionC",
        type: "text",
        placeholder: "Enter Answer Option C",
        as: "input",
        col: 6,
      },
      {
        label: "Option D",
        name: "optionD",
        type: "text",
        placeholder: "Enter Answer Option D",
        as: "input",
        col: 6,
      },
      {
        label: "Correct Answer",
        name: "correctAnswer",
        type: "select",
        options: ["Select the correct answer", "a", "b", "c", "d"],
        as: "select",
        col: 12,
      },
      {
        label: "Image",
        name: "image",
        type: "file",
        as: "input",
        help: "Select an image with 720x455 pixels. Only JPG, JPEG, PNG & GIF files are allowed.",
        col: 12,
      },
    ],
    submitText: "Submit",
  },
  packages: {
    title: "Create Package",
    listLink: "/lists/packages",
    listText: "View list of Packages",
    formTitle: "Create a Package",
    fields: [
      {
        label: "Package Name",
        name: "packageName",
        type: "text",
        placeholder: "Enter Package Name",
        as: "input",
        col: 6,
      },
      {
        label: "Amount",
        name: "amount",
        type: "number",
        placeholder: "Enter Amount",
        as: "input",
        col: 6,
      },
      {
        label: "Duration",
        name: "duration",
        type: "number",
        placeholder: "Enter Duration",
        as: "input",
        col: 6,
      },
      {
        label: "Duration Unit",
        name: "durationUnit",
        type: "select",
        options: ["monthly", "yearly", "biannually"],
        as: "select",
        col: 6,
      },
      {
        label: "Description",
        name: "description",
        type: "text",
        placeholder: "Enter Package Description",
        as: "textarea",
        col: 12,
      },
    ],
    submitText: "Submit",
  },
  "dicom-observation-titles": {
    title: "Create Dicom Observation titles",
    listLink: "/lists/dicom-observation-titles",
    listText: "View list of Dicom Observation titles",
    formTitle: "Add a Dicom Observation title",
    fields: [
      {
        label: "Select Module",
        name: "module",
        type: "select",
        options: ["Select a Module", "Module 1", "Module 2"],
        as: "select",
        col: 6,
      },
      {
        label: "Select Pathology",
        name: "pathology",
        type: "select",
        options: [], // This will likely be fetched dynamically
        as: "select",
        col: 6,
      },
      {
        label: "Select Session",
        name: "session",
        type: "select",
        options: ["Select a Session", "Session 1", "Session 2"], // This will likely be fetched dynamically
        as: "select",
        col: 12,
      },

      {
        label: "Observation Video File (MP4 only)", // Clear label for file upload
        name: "observationVideoFile",
        type: "file",
        accept: "video/mp4", // Restrict to MP4 files
        as: "input",
        col: 6,
      },
      {
        label: "Observation Video URL", // For external video links (e.g., YouTube, Vimeo)
        name: "observationVideoUrl",
        type: "url", // Use 'url' type for browser validation/keyboard
        placeholder: "Enter Video URL (e.g., YouTube, Vimeo)",
        as: "input",
        col: 6,
      },
      // --- END NEW FIELDS ---
    ],
    extraButtons: [
      {
        text: "Add Title",
        variant: "primary",
        type: "button",
        className: "mb-3",
      },
    ],
    submitText: "Submit",
  },
  "session-resources": {
    title: "Create Session Resources",
    listLink: "/lists/session-resources",
    listText: "View list of Session Resources",
    formTitle: "Create a Session Resource",
    fields: [
      {
        label: "Select Session Type",
        name: "sessionType",
        type: "select",
        options: ["Program Session", "Type 2", "Type 3"],
        as: "select",
        col: 3,
      },
      {
        label: "Select Module",
        name: "module",
        type: "select",
        options: ["Select a Module", "Module 1", "Module 2"],
        as: "select",
        col: 3,
      },
      {
        label: "Select Pathology",
        name: "phase",
        type: "select",
        options: ["Select a Pathology", "Pathology 1", "Pathology 2"],
        as: "select",
        col: 3,
      },
      {
        label: "Select Session",
        name: "session",
        type: "select",
        options: ["Select a Session", "Session 1", "Session 2"],
        as: "select",
        col: 12,
      },
      {
        label: "File Type",
        name: "fileType",
        type: "select",
        options: ["Select a file type", "PDF", "DOCX", "Other"],
        as: "select",
        col: 12,
      },
      {
        label: "Display Name",
        name: "displayName",
        type: "text",
        placeholder: "Enter Display Name",
        as: "input",
        col: 12,
      },
      {
        label: "Resource Link URL",
        name: "resourceLinkUrl",
        type: "text",
        placeholder: "Enter Resource Link URL",
        as: "input",
        col: 12,
      },
      {
        label: "Resource File",
        name: "resourceFile",
        type: "file",
        as: "input",
        help: "Only PDF files are allowed",
        col: 12,
      },
    ],
    submitText: "Submit",
  },
  faculty: {
    title: "Create Faculty",
    listLink: "/lists/faculty",
    listText: "View list of Faculty",
    formTitle: "Create a Faculty",
    fields: [
      {
        label: "Faculty Name",
        name: "name",
        type: "text",
        placeholder: "Enter Faculty Name",
        as: "input",
        col: 6,
      },
      {
        label: "Faculty Location",
        name: "location",
        type: "text",
        placeholder: "Enter Faculty Location",
        as: "input",
        col: 6,
      },
      {
        label: "Faculty Country",
        name: "country",
        type: "select",
        options: ["Select Country", "USA", "India", "UK", "Other"],
        as: "select",
        col: 6,
      },
      {
        label: "Faculty Email",
        name: "email",
        type: "email",
        placeholder: "Enter Faculty Email",
        as: "input",
        col: 6,
      },
      {
        label: "Faculty Description",
        name: "description",
        type: "text",
        placeholder: "Enter Faculty Description",
        as: "textarea",
        col: 6,
      },
      {
        label: "Faculty Image",
        name: "image",
        type: "file",
        as: "input",
        help: "Select an image with 300x300 pixels. Only JPG, JPEG, PNG & GIF files are allowed",
        col: 6,
      },
    ],
    submitText: "Submit",
  },
  pathologies: {
    title: "Create Pathology",
    listLink: "/lists/pathologies",
    listText: "View list of Pathologies",
    formTitle: "Create a Pathology",
    fields: [
      {
        label: "Pathology Name",
        name: "pathologyName",
        type: "text",
        placeholder: "Enter Pathology Name",
        as: "input",
      },
      {
        label: "Description",
        name: "description",
        type: "text",
        placeholder: "Enter Description",
        as: "textarea",
      },
      {
        label: "Module",
        name: "categoryId",
        type: "select",
        options: ["Select a Module", "Module 1", "Module 2"], // Replace with dynamic modules if needed
        as: "select",
      },
      {
        label: "Pathology Image",
        name: "image",
        type: "file",
        as: "input",
        help: "Select an image with 720x455 pixels. Only JPG, JPEG, PNG & GIF files are allowed.",
        col: 12,
      },
    ],
    submitText: "Submit",
  },
};

// Define the always-on-top fields
const sessionTopFields = [
  {
    label: "Select Module",
    name: "module",
    type: "select",
    options: [],
    as: "select",
    col: 6,
  },
  {
    label: "Select Pathology",
    name: "pathology",
    type: "select",
    options: [],
    as: "select",
    col: 6,
  },
  { label: "Title", name: "title", type: "text", as: "input", col: 6 },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    col: 6,
  },
];

const sessionTypeFields = {
  Dicom: [
    {
      label: "Difficulty",
      name: "difficulty",
      type: "select",
      options: ["beginner", "advanced", "intermediate"],
      as: "select",
      col: 6,
    },
    {
      label: "Assessment?",
      name: "isAssessment",
      type: "select",
      options: ["No", "Yes"],
      as: "select",
      col: 6,
    },
    {
      label: "Free?",
      name: "isFree",
      type: "select",
      options: ["No", "Yes"],
      as: "select",
      col: 6,
    },
    {
      label: "Dicom Study ID",
      name: "dicomStudyId",
      type: "text",
      as: "input",
      col: 6,
    },
    {
      label: "Dicom Case ID",
      name: "dicomCaseId",
      type: "text",
      as: "input",
      col: 6,
    },
    {
      label: "Dicom Case Video URL",
      name: "dicomCaseVideoUrl",
      type: "text",
      as: "input",
      col: 6,
    },
    {
      label: "Case Access Type",
      name: "caseAccessType",
      type: "text",
      as: "input",
      col: 6,
    },
    {
      label: "Resource Links",
      name: "resourceLinks",
      type: "text",
      as: "textarea",
      col: 12,
    },
    {
      label: "Image 1920x1080",
      name: "image1920x1080",
      type: "file",
      as: "input",
      col: 6,
      help: "Upload image with 1920x1080 aspect ratio",
    },
    {
      label: "Image 522x760",
      name: "image522x760",
      type: "file",
      as: "input",
      col: 6,
      help: "Upload image with 522x760 aspect ratio",
    },
    {
      label: "Start Date",
      name: "startDate",
      type: "date",
      as: "input",
      col: 6,
    },
    { label: "End Date", name: "endDate", type: "date", as: "input", col: 6 },
    {
      label: "Start Time",
      name: "startTime",
      type: "time",
      as: "input",
      col: 6,
    },
    { label: "End Time", name: "endTime", type: "time", as: "input", col: 6 },
    {
      label: "Sponsored",
      name: "sponsored",
      type: "text",
      as: "input",
      col: 6,
    },
  ],
  Vimeo: [
    {
      label: "Difficulty",
      name: "difficulty",
      type: "select",
      options: ["beginner", "advanced", "intermediate"],
      as: "select",
      col: 6,
    },
    {
      label: "Assessment?",
      name: "isAssessment",
      type: "select",
      options: ["No", "Yes"],
      as: "select",
      col: 6,
    },
    {
      label: "Free?",
      name: "isFree",
      type: "select",
      options: ["No", "Yes"],
      as: "select",
      col: 6,
    },
    {
      label: "Resource Links",
      name: "resourceLinks",
      type: "text",
      as: "textarea",
      col: 12,
    },
    {
      label: "Session Duration",
      name: "sessionDuration",
      type: "text",
      as: "input",
      col: 6,
    },
    {
      label: "Vimeo Video ID",
      name: "vimeoVideoId",
      type: "text",
      as: "input",
      col: 6,
    },
    { label: "Video URL", name: "videoUrl", type: "text", as: "input", col: 6 },
    {
      label: "Video Type",
      name: "videoType",
      type: "select",
      options: ["Recorded", "Live"],
      as: "select",
      col: 6,
    },
    {
      label: "Image 1920x1080",
      name: "image1920x1080",
      type: "file",
      as: "input",
      col: 6,
      help: "Upload image with 1920x1080 aspect ratio",
    },
    {
      label: "Image 522x760",
      name: "image522x760",
      type: "file",
      as: "input",
      col: 6,
      help: "Upload image with 522x760 aspect ratio",
    },
    {
      label: "Start Date",
      name: "startDate",
      type: "date",
      as: "input",
      col: 6,
    },
    { label: "End Date", name: "endDate", type: "date", as: "input", col: 6 },
    {
      label: "Start Time",
      name: "startTime",
      type: "time",
      as: "input",
      col: 6,
    },
    { label: "End Time", name: "endTime", type: "time", as: "input", col: 6 },
    {
      label: "Sponsored",
      name: "sponsored",
      type: "text",
      as: "input",
      col: 6,
    },
  ],
};

const CreateForm = () => {
  const { type } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const config = { ...(formConfigs[type] || formConfigs["modules"]) };
  if (id) {
    if (type === "faculty") {
      config.formTitle = "Edit Faculty";
    } else if (type === "assessment-questions") {
      config.formTitle = "Edit Assessment Question";
    } else if (type === "dicom-observation-titles") {
      config.formTitle = "Edit Dicom Observation Title";
    }
  }
  const [formData, setFormData] = useState({
    observations: [{ observationText: "", facultyObservation: "" }],
  });
  const fileInputRefs = useRef({});
  const [moduleOptions, setModuleOptions] = useState([]);
  const [pathologyOptions, setPathologyOptions] = useState([]);
  const [sessionOptions, setSessionOptions] = useState([]);
  const [selectFocus, setSelectFocus] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  const [moduleList, setModuleList] = useState([]);

  // For sessions, manage sessionType and dynamic fields
  const [sessionType, setSessionType] = useState("Dicom");
  const sessionFields =
    type === "sessions" ? sessionTypeFields[sessionType] : config.fields;

  // Fetch modules for pathologies form
  useEffect(() => {
    if (type === "pathologies" || type === "assessment-questions") {
      getModules()
        .then((res) => {
          const modules = Array.isArray(res.data.data)
            ? res.data.data
            : res.data.data || [];
          console.log(modules);
          setModuleList(modules);
          setModuleOptions(
            modules.map((m) => ({
              value: m._id,
              label: m.moduleName || m.name,
            }))
          );
        })
        .catch(() => {
          setModuleList([]);
          setModuleOptions([]);
        });
    }
  }, [type]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get("id");
    if (id) {
      if (type === "faculty") {
        getFacultyById(id)
          .then((res) => {
            setFormData(res.data.data);
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (type === "assessment-questions") {
        getAssessmentQuestionById(id)
          .then((res) => {
            const { options, ...rest } = res.data.data;
            setFormData({
              ...rest,
              optionA: options.a,
              optionB: options.b,
              optionC: options.c,
              optionD: options.d,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (type === "dicom-observation-titles") {
        const data = location.state;
        if (data) {
          setFormData(data);
        }
      }
    } else if (location.state) {
      setFormData(location.state);
    }
  }, [location.search, type, location.state]);

  useEffect(() => {
    getModules()
      .then((res) => {
        const mods = Array.isArray(res.data.data)
          ? res.data.data
          : res.data.data || [];
        setModuleOptions(
          mods.map((m) => ({
            value: m._id,
            label: m.moduleName || m.name,
          }))
        );
      })
      .catch(() => setModuleOptions([]));
  }, []);

  useEffect(() => {
    getSessions()
      .then((res) => {
        const sessions = Array.isArray(res.data.data)
          ? res.data.data
          : res.data.data || [];
        setSessionOptions(
          sessions.map((s) => ({
            value: s._id,
            label: s.title || s.name,
          }))
        );
      })
      .catch(() => setSessionOptions([]));
  }, []);
  useEffect(() => {
    setFormData({
      observations: [{ observationText: "", facultyObservation: "" }],
    });
  }, [type]);

  const handleChange = (e) => {
    const { name, value, type: inputType, files } = e.target;
    if (inputType === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "module") {
      if (value) {
        getPathologiesByModule(value)
          .then((res) => {
            const paths = Array.isArray(res.data.data)
              ? res.data.data
              : res.data.data || [];
            setPathologyOptions(
              paths.map((p) => ({
                value: p._id,
                label: p.pathologyName || p.name,
              }))
            );
          })
          .catch(() => setPathologyOptions([]));
      } else {
        setPathologyOptions([]);
      }
      setFormData((prev) => ({ ...prev, pathology: "" }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] || null }));
    // If you want to clear the URL field when a file is selected
    if (name === "observationVideoFile" && files[0]) {
      setFormData((prev) => ({ ...prev, observationVideoUrl: "" }));
    }
  };

  const handleFileClick = (name) => {
    if (fileInputRefs.current[name]) {
      fileInputRefs.current[name].click();
    }
  };

  const handleSessionTypeChange = (e) => {
    setSessionType(e.target.value);
  };

  const handleObservationChange = (index, e) => {
    const { name, value } = e.target;
    const newObservations = [...formData.observations];
    newObservations[index][name] = value;
    setFormData((prev) => ({ ...prev, observations: newObservations }));
  };

  const addObservation = () => {
    setFormData((prev) => ({
      ...prev,
      observations: [
        ...prev.observations,
        { observationText: "", facultyObservation: "" },
      ],
    }));
  };

  const removeObservation = (index) => {
    if (formData.observations.length > 1) {
      const newObservations = formData.observations.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({ ...prev, observations: newObservations }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    const query = new URLSearchParams(location.search);
    const id = query.get("id");

    if (type === "sessions") {
      const { module, pathology, title, description, ...restOfData } = formData;

      const selectedModule = moduleOptions.find((opt) => opt.value === module);
      if (selectedModule) {
        formDataToSend.append("moduleName", selectedModule.label);
      }
      if (pathology) {
        formDataToSend.append("subCategoryId", pathology);
        const selectedPathology = pathologyOptions.find(
          (opt) => opt.value === pathology
        );
        if (selectedPathology) {
          formDataToSend.append("subCategoryName", selectedPathology.label);
        }
      }
      if (title) formDataToSend.append("title", title);
      if (description) formDataToSend.append("description", description);
      formDataToSend.append("sessionType", sessionType);

      sessionTypeFields[sessionType].forEach((field) => {
        let value = formData[field.name];
        if (field.name === "isAssessment" || field.name === "isFree") {
          value = value === "Yes" ? true : false;
        }
        if (field.type === "file" && value instanceof File) {
          formDataToSend.append(field.name, value);
        } else if (value !== undefined) {
          formDataToSend.append(field.name, value);
        }
      });
    } else if (type === "assessment-questions") {
      const {
        module,
        question,
        description,
        optionA,
        optionB,
        optionC,
        optionD,
        correctAnswer,
        image,
      } = formData;
      const options = {
        a: optionA,
        b: optionB,
        c: optionC,
        d: optionD,
      };
      formDataToSend.append("module", module);
      formDataToSend.append("question", question);
      formDataToSend.append("description", description);
      formDataToSend.append("options", JSON.stringify(options));
      formDataToSend.append("correctAnswer", correctAnswer);
      if (image instanceof File) {
        formDataToSend.append("image", image);
      } else if (typeof image === "string") {
        formDataToSend.append("image", image);
      }
    } else if (type === "dicom-observation-titles") {
      const { observations, module, session } = formData;
      const payload = {
        observations: observations.map((obs) => ({
          observationText: obs.observationText,
          facultyObservation: obs.facultyObservation,
        })),
        Module: module,
        sessionName: session,
        sessionId: 0, // Assuming a default value
      };
    } else {
      config.fields.forEach((field) => {
        const value = formData[field.name];
        if (field.type === "file" && value instanceof File) {
          formDataToSend.append(field.name, value);
        } else if (value !== undefined) {
          formDataToSend.append(field.name, value);
        }
      });
    }

    try {
      let res;
      switch (type) {
        case "sessions":
          res = await createSession(formDataToSend);
          break;
        case "modules":
          res = await createModule(formDataToSend);
          break;
        case "assessment-questions":
          if (id) {
            res = await updateAssessmentQuestion(id, formDataToSend);
          } else {
            res = await createAssessmentQuestion(formDataToSend);
          }
          break;
        case "faculty":
          if (id) {
            res = await updateFaculty(id, formDataToSend);
          } else {
            res = await createFaculty(formDataToSend);
          }
          break;
        case "session-resources":
          res = await createSessionResource(formDataToSend);
          break;
        case "phases":
          res = await createPhase(formDataToSend);
          break;
        case "pathologies":
          const categoryId = formData["categoryId"];
          res = await createPathology(formDataToSend, categoryId);
          break;
        case "dicom-observation-titles":
          const { observations, module, session } = formData;
          const payload = {
            observations: observations.map((obs) => ({
              observationText: obs.observationText,
              facultyObservation: obs.facultyObservation,
            })),
            Module: module,
            sessionName: session,
            sessionId: 0, // Assuming a default value
          };
          if (id) {
            res = await updateObservation(id, payload);
          } else {
            res = await createObservation(payload);
          }
          break;
        default:
          setToast({
            show: true,
            message: "Unknown form type",
            variant: "danger",
          });
          return;
      }
      setToast({
        show: true,
        message: `${config.title.replace("Create ", "")} created successfully`,
        variant: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      let msg = err?.response?.data?.message || err.message || "Network error";
      setToast({ show: true, message: msg, variant: "danger" });
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ background: "#f6f8fa", minHeight: "100vh", padding: 0 }}
    >
      <div className="py-4 px-3">
        <h2 style={{ color: "#222", fontWeight: 700 }}>{config.title}</h2>
        <div style={{ marginBottom: 16 }}>
          <Link
            to={config.listLink}
            style={{
              color: "#2196f3",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            {config.listText}
          </Link>
        </div>
        <Card
          style={{
            maxWidth: 900,
            margin: "0 auto",
            borderTop: "4px solid #2196f3",
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
            color: "#222",
          }}
        >
          <Card.Body>
            <h4 className="mb-4" style={{ color: "#222", fontWeight: 600 }}>
              {config.formTitle}
            </h4>
            <Form onSubmit={handleSubmit}>
              {/* Only show these fields at the top for sessions */}
              {type === "sessions" &&
                (() => {
                  // Group sessionTopFields by rows of 12 columns
                  const rows = [];
                  let currentRow = [];
                  let currentSum = 0;
                  sessionTopFields.forEach((field) => {
                    const col = field.col || 12;
                    if (currentSum + col > 12) {
                      rows.push(currentRow);
                      currentRow = [];
                      currentSum = 0;
                    }
                    currentRow.push(field);
                    currentSum += col;
                  });
                  if (currentRow.length) rows.push(currentRow);
                  return rows.map((row, rIdx) => (
                    <Row key={rIdx} className="mb-3">
                      {row.map((field) => (
                        <Col key={field.name} md={field.col || 12}>
                          <Form.Group controlId={field.name}>
                            <Form.Label
                              style={{ fontWeight: 600, color: "#222" }}
                            >
                              {field.label}
                            </Form.Label>
                            {field.as === "textarea" ? (
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "#f6f8fa",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            ) : field.as === "select" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              >
                                <option value="">
                                  Select {field.label.replace("Select ", "")}
                                </option>
                                {(field.name === "module"
                                  ? moduleOptions
                                  : field.name === "pathology"
                                  ? pathologyOptions
                                  : []
                                ).map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </Form.Select>
                            ) : (
                              <Form.Control
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "white",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            )}
                          </Form.Group>
                        </Col>
                      ))}
                    </Row>
                  ));
                })()}
              {/* Session type dropdown for sessions */}
              {type === "sessions" && (
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="sessionType">
                      <Form.Label style={{ fontWeight: 600, color: "#222" }}>
                        Select Session Type
                      </Form.Label>
                      <Form.Select
                        className="form-select-with-icon"
                        name="sessionType"
                        value={sessionType}
                        onChange={handleSessionTypeChange}
                        style={{
                          color: "#222",
                          border: "1px solid #e0e0e0",
                          borderRadius: 10,
                        }}
                      >
                        <option value="Dicom">Dicom</option>
                        <option value="Vimeo">Vimeo</option>
                        <option value="Vimeo">Zoom</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              )}
              {/* Dynamic fields for sessions */}
              {type === "sessions" &&
                (() => {
                  // Group fields by rows of 12 columns
                  const rows = [];
                  let currentRow = [];
                  let currentSum = 0;
                  (type === "sessions" ? sessionFields : config.fields).forEach(
                    (field) => {
                      // Skip top fields if present in sessionFields
                      if (
                        [
                          "module",
                          "pathology",
                          "title",
                          "description",
                        ].includes(field.name)
                      )
                        return;
                      const col = field.col || 12;
                      if (currentSum + col > 12) {
                        rows.push(currentRow);
                        currentRow = [];
                        currentSum = 0;
                      }
                      currentRow.push(field);
                      currentSum += col;
                    }
                  );
                  if (currentRow.length) rows.push(currentRow);
                  return rows.map((row, rIdx) => (
                    <Row key={rIdx} className="mb-3">
                      {row.map((field) => (
                        <Col key={field.name} md={field.col || 12}>
                          <Form.Group controlId={field.name}>
                            <Form.Label
                              style={{ fontWeight: 600, color: "#222" }}
                            >
                              {field.label}
                            </Form.Label>
                            {field.as === "textarea" ? (
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "#f6f8fa",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            ) : field.as === "select" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              >
                                {field.options &&
                                  field.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                              </Form.Select>
                            ) : field.type === "file" ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                }}
                              >
                                <input
                                  type="file"
                                  name={field.name}
                                  ref={(el) =>
                                    (fileInputRefs.current[field.name] = el)
                                  }
                                  onChange={handleChange}
                                  style={{ display: "none" }}
                                />
                                <Button
                                  type="button"
                                  onClick={() => handleFileClick(field.name)}
                                  style={{
                                    background: "lightgray",
                                    color: "black",
                                    border: "none",
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    padding: "6px 18px",
                                    boxShadow:
                                      "0 2px 8px rgba(33,150,243,0.08)",
                                  }}
                                >
                                  Choose File
                                </Button>
                                {typeof formData[field.name] !== "string" && (
                                  <span
                                    style={{
                                      color: "#222",
                                      fontWeight: 500,
                                      fontSize: 14,
                                    }}
                                  >
                                    {formData[field.name]?.name ||
                                      "No file chosen"}
                                  </span>
                                )}
                                {formData[field.name] &&
                                  typeof formData[field.name] === "string" && (
                                    <div className="mt-2">
                                      <img
                                        src={`${API_BASE}/${
                                          formData[field.name]
                                        }`}
                                        alt="Current"
                                        style={{
                                          maxWidth: 120,
                                          borderRadius: 8,
                                        }}
                                      />
                                    </div>
                                  )}
                              </div>
                            ) : (
                              <Form.Control
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "white",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            )}
                            {field.help && (
                              <Form.Text
                                className="text-muted"
                                style={{ color: "#888" }}
                              >
                                {field.help}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      ))}
                    </Row>
                  ));
                })()}
              {/* Pathology form: custom rendering for Module dropdown */}
              {type === "pathologies" &&
                (() => {
                  // Group fields by rows of 12 columns
                  const rows = [];
                  let currentRow = [];
                  let currentSum = 0;
                  config.fields.forEach((field) => {
                    const col = field.col || 12;
                    if (currentSum + col > 12) {
                      rows.push(currentRow);
                      currentRow = [];
                      currentSum = 0;
                    }
                    currentRow.push(field);
                    currentSum += col;
                  });
                  if (currentRow.length) rows.push(currentRow);
                  return rows.map((row, rIdx) => (
                    <Row key={rIdx} className="mb-3">
                      {row.map((field) => (
                        <Col key={field.name} md={field.col || 12}>
                          <Form.Group controlId={field.name}>
                            <Form.Label
                              style={{ fontWeight: 600, color: "#222" }}
                            >
                              {field.label}
                            </Form.Label>
                            {field.name === "categoryId" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData.moduleId || ""}
                                onChange={handleChange}
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              >
                                <option value="">Select Module</option>
                                {moduleOptions.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </Form.Select>
                            ) : field.name === "pathologyId" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData.pathologyId || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    pathologyId: e.target.value,
                                  }))
                                }
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                                disabled={!formData.moduleId}
                              >
                                <option value="">Select Pathology</option>
                                {pathologyOptions.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </Form.Select>
                            ) : field.as === "textarea" ? (
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "#f6f8fa",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            ) : field.as === "select" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              >
                                {field.options &&
                                  field.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                              </Form.Select>
                            ) : field.type === "file" ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                }}
                              >
                                <input
                                  type="file"
                                  name={field.name}
                                  ref={(el) =>
                                    (fileInputRefs.current[field.name] = el)
                                  }
                                  onChange={handleChange}
                                  style={{ display: "none" }}
                                />
                                <Button
                                  type="button"
                                  onClick={() => handleFileClick(field.name)}
                                  style={{
                                    background: "lightgray",
                                    color: "black",
                                    border: "none",
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    padding: "6px 18px",
                                    boxShadow:
                                      "0 2px 8px rgba(33,150,243,0.08)",
                                  }}
                                >
                                  Choose File
                                </Button>
                                {typeof formData[field.name] !== "string" && (
                                  <span
                                    style={{
                                      color: "#222",
                                      fontWeight: 500,
                                      fontSize: 14,
                                    }}
                                  >
                                    {formData[field.name]?.name ||
                                      "No file chosen"}
                                  </span>
                                )}
                                {formData[field.name] &&
                                  typeof formData[field.name] === "string" && (
                                    <div className="mt-2">
                                      <img
                                        src={`${API_BASE}/${
                                          formData[field.name]
                                        }`}
                                        alt="Current"
                                        style={{
                                          maxWidth: 120,
                                          borderRadius: 8,
                                        }}
                                      />
                                    </div>
                                  )}
                              </div>
                            ) : (
                              <Form.Control
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "white",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            )}
                            {field.help && (
                              <Form.Text
                                className="text-muted"
                                style={{ color: "#888" }}
                              >
                                {field.help}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      ))}
                    </Row>
                  ));
                })()}
              {/* Custom rendering for dicom-observation-titles */}
              {type === "dicom-observation-titles" && (
                <>
                  {/* Renders Module, Pathology, Session, Observation Title, Faculty Observation,
        Observation Video File, and Observation Video URL from config.fields */}
                  {config.fields.map((field) => (
                    <Col md={field.col || 12} key={field.name} className="mb-3">
                      <Form.Group controlId={field.name}>
                        <Form.Label style={{ fontWeight: 600, color: "#222" }}>
                          {field.label}
                          {field.type === "file" && field.accept && (
                            <span
                              style={{
                                fontSize: "0.85em",
                                color: "#6c757d",
                                marginLeft: "8px",
                              }}
                            >
                              ({field.accept.split("/")[1].toUpperCase()} only)
                            </span>
                          )}
                        </Form.Label>
                        {field.as === "textarea" ? (
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            style={{
                              background: "#f6f8fa",
                              color: "#222",
                              border: "1px solid #e0e0e0",
                              borderRadius: 10,
                            }}
                          />
                        ) : field.as === "select" ? (
                          <Form.Select
                            className="form-select-with-icon"
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            style={{
                              color: "#222",
                              border: "1px solid #e0e0e0",
                              borderRadius: 10,
                            }}
                          >
                            <option value="">
                              Select {field.label.replace("Select ", "")}
                            </option>
                            {/* Dynamic options for select fields */}
                            {(field.name === "module"
                              ? moduleOptions // Assuming these are state variables in your component
                              : field.name === "pathology"
                              ? pathologyOptions // Assuming these are state variables in your component
                              : field.name === "session"
                              ? sessionOptions // Assuming these are state variables in your component
                              : field.options
                            ).map((opt, index) => (
                              <option
                                key={index}
                                value={
                                  typeof opt === "object" ? opt.value : opt
                                }
                              >
                                {typeof opt === "object" ? opt.label : opt}
                              </option>
                            ))}
                          </Form.Select>
                        ) : (
                          // Handles text, number, url, and file inputs
                          <Form.Control
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            // For file input, `value` should not be set directly
                            value={
                              field.type !== "file"
                                ? formData[field.name] || ""
                                : undefined
                            }
                            // For file input, onChange needs special handling
                            onChange={
                              field.type === "file"
                                ? handleFileChange
                                : handleChange
                            }
                            accept={field.accept} // Pass accept prop for file inputs
                            style={{
                              background: "white",
                              color: "#222",
                              border: "1px solid #e0e0e0",
                              borderRadius: 10,
                            }}
                          />
                        )}
                        {field.help && (
                          <Form.Text
                            className="text-muted"
                            style={{ color: "#888" }}
                          >
                            {field.help}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  ))}

                  {/* Dynamic "Add Title" (observations) section */}
                  {formData.observations.map((obs, index) => (
                    <Row key={index} className="mb-3 align-items-end">
                      <Col md={5}>
                        <Form.Group>
                          <Form.Label>Observation Title</Form.Label>
                          <Form.Control
                            type="text"
                            name="observationTitle" // Ensure this matches formData.observations[i].observationTitle
                            value={obs.observationTitle}
                            onChange={(e) => handleObservationChange(index, e)}
                            style={{
                              background: "white",
                              color: "black",
                              border: "1px solid #e0e0e0",
                              borderRadius: 10,
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={5}>
                        {" "}
                        {/* Adjusted col for faculty observation */}
                        <Form.Group>
                          <Form.Label>Faculty Observation</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="facultyObservation" // Ensure this matches formData.observations[i].facultyObservation
                            value={obs.facultyObservation}
                            onChange={(e) => handleObservationChange(index, e)}
                            style={{
                              background: "white",
                              color: "black",
                              border: "1px solid #e0e0e0",
                              borderRadius: 10,
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2}>
                        {formData.observations.length > 1 && (
                          <Button
                            variant="danger"
                            onClick={() => removeObservation(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </Col>
                    </Row>
                  ))}

                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      onClick={addObservation}
                      className="mb-3"
                    >
                      Add Title
                    </Button>
                  </div>
                </>
              )}
              {type !== "sessions" &&
                type !== "pathologies" &&
                type !== "dicom-observation-titles" &&
                (() => {
                  // Group fields by rows of 12 columns
                  const rows = [];
                  let currentRow = [];
                  let currentSum = 0;
                  config.fields.forEach((field) => {
                    const col = field.col || 12;
                    if (currentSum + col > 12) {
                      rows.push(currentRow);
                      currentRow = [];
                      currentSum = 0;
                    }
                    currentRow.push(field);
                    currentSum += col;
                  });
                  if (currentRow.length) rows.push(currentRow);
                  return rows.map((row, rIdx) => (
                    <Row key={rIdx} className="mb-3">
                      {row.map((field) => (
                        <Col key={field.name} md={field.col || 12}>
                          <Form.Group controlId={field.name}>
                            <Form.Label
                              style={{ fontWeight: 600, color: "#222" }}
                            >
                              {field.label}
                            </Form.Label>
                            {field.as === "textarea" ? (
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "#f6f8fa",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            ) : field.as === "select" ? (
                              <Form.Select
                                className="form-select-with-icon"
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              >
                                {field.name === "module" ? (
                                  <>
                                    <option value="">Select Module</option>
                                    {moduleOptions.map((opt) => (
                                      <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </option>
                                    ))}
                                  </>
                                ) : (
                                  field.options &&
                                  field.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))
                                )}
                              </Form.Select>
                            ) : field.type === "file" ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                }}
                              >
                                <input
                                  type="file"
                                  name={field.name}
                                  ref={(el) =>
                                    (fileInputRefs.current[field.name] = el)
                                  }
                                  onChange={handleChange}
                                  style={{ display: "none" }}
                                />
                                <Button
                                  type="button"
                                  onClick={() => handleFileClick(field.name)}
                                  style={{
                                    background: "lightgray",
                                    color: "black",
                                    border: "none",
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    padding: "6px 18px",
                                    boxShadow:
                                      "0 2px 8px rgba(33,150,243,0.08)",
                                  }}
                                >
                                  Choose File
                                </Button>
                                {typeof formData[field.name] !== "string" && (
                                  <span
                                    style={{
                                      color: "#222",
                                      fontWeight: 500,
                                      fontSize: 14,
                                    }}
                                  >
                                    {formData[field.name]?.name ||
                                      "No file chosen"}
                                  </span>
                                )}
                                {formData[field.name] &&
                                  typeof formData[field.name] === "string" && (
                                    <div className="mt-2">
                                      <img
                                        src={`${API_BASE}/${
                                          formData[field.name]
                                        }`}
                                        alt="Current"
                                        style={{
                                          maxWidth: 120,
                                          borderRadius: 8,
                                        }}
                                      />
                                    </div>
                                  )}
                              </div>
                            ) : (
                              <Form.Control
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                style={{
                                  background: "white",
                                  color: "#222",
                                  border: "1px solid #e0e0e0",
                                  borderRadius: 10,
                                }}
                              />
                            )}
                            {field.help && (
                              <Form.Text
                                className="text-muted"
                                style={{ color: "#888" }}
                              >
                                {field.help}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      ))}
                    </Row>
                  ));
                })()}
              <Button
                variant="primary"
                type="submit"
                style={{
                  background: "#2196f3",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 10,
                  marginTop: 8,
                }}
              >
                {config.submitText}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          bg={toast.variant}
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          delay={3000}
          autohide
          style={{ minWidth: 280 }}
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">
              {toast.variant === "success" ? "Success" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body
            className={toast.variant === "danger" ? "text-white" : ""}
          >
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default CreateForm;
