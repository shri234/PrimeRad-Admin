import React, { useState,useRef,memo } from "react";
import Swal from 'sweetalert2'
// react-bootstrap
import { Row, Col, Card, Button, Offcanvas, Form, Table} from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";
// react-router-dom
import { Link } from "react-router-dom";

// components
import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import VideoModal from "../../../components/Videomodal";
import SubtitleModal from "../../../components/SubtitleModal";
import CastModalEdit from "../../../components/CastModalEdit";
import VideoModalEdit from "../../../components/VideoModalEdit";

// plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

//DATA
const tableData = ([
  { movie: '/assets/images/movie-thumb/03.jpg', title: 'Arrival 1999', time: '2h 21m',language: '(english, hindi)',quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/04.jpg', title: 'Day Of Darkness',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/05.jpg', title: 'Don Jon',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/06.jpg', title: 'Mega Fun', time: '2h 21m' ,language: '(english, hindi)',quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/07.jpg', title: 'My True Friends',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/08.jpg', title: 'Night Mare',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/09.jpg', title: 'Portable',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/10.jpg', title: 'Suffered',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/02.jpg', title: 'The Witcher', time: '2h 21m' ,language: '(english, hindi)',quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/01.jpg', title: 'Troll Hunter',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/01.jpg', title: 'Troll Hunter',time: '2h 21m' ,language: '(english, hindi)', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/01.jpg', title: 'Troll Hunter',time: '2h 21m' , language: '(english, hindi)',quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' }, 
]);

const columns = [
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  {
    data: null,
    title: 'Movie',
    render: function (row) {
      return `
      <div class="d-flex">
          <img src="${row.movie}" class="rounded-2 avatar avatar-55 img-fluid" />
          <div class="d-flex flex-column ms-3 justify-content-center">
              <h6 class="text-capitalize">${row.title}</h6>
              <small>${row.time}</small>
              <small class="text-capitalize">${row.language}</small>
          </div>
      </div>
          
        `;
    },
  },

  { data: "quality", title: "Quality" },
  { data: "category", title: "Category" },
  { data: "publish_date", title: "Publish Date" },
  { data: "movie_access", title: "Movie Access" },
  { data: "seo", title: "Seo" },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function () {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox">
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
       <div class="d-flex gap-1 align-items-center">
        <a title="Edit" class="btn btn-sm btn-icon btn-success rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="fa-solid fa-pen"></i></a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#" ><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
    },
  },
];

const MovieList = memo(() => {
  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
     actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas();
        break;

      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },});

  const showAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this item",
      icon: 'error',
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: "#c03221"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  }

  // offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <Row>
      <Col sm="12">
        <Card className="pb-3">
          <Card.Header className="border-bottom d-flex justify-content-between align-items-center pb-3">
            <div className="d-flex align-items-center pt-3">
              <div className="form-group d-flex align-items-center">
                <select placeholder="No Action" className="form-select">
                  <option>No Action</option>
                  <option>Status</option>
                  <option>Delete</option>
                </select>
                <Button variant="primary" className="ms-1">
                  Apply
                </Button>
              </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
              <i className="fa-solid fa-plus me-2"></i>
              Add Movie
            </Button>
          </Card.Header>
          <Card.Body>
            <div className="table-view table-responsive pt-3 table-space">
              <table
                  id="datatable"
                  ref={tableRef}
                  className="table table-striped"
                ></table>
            </div>
          </Card.Body>
        </Card>
        </Col>
    </Row>
  );
});

MovieList.displayName = "MovieList";
export default MovieList;
