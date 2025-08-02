import React, { memo, Fragment, useRef } from "react";

//react-bootstrap
import { Row, Col, Button } from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";
import Swal from 'sweetalert2';

import Card from "../../../components/bootstrap/card";

//DATA
const tableData = ([
  { Profile: '/assets/images/user/01.jpg', name: 'Anna Sthesia', contact: '(760) 756 7568', email: 'Annasthesia@Gmail.Com',country: 'USA', status: 'Active', company: 'Acme Corporation', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/02.jpg', name: 'Brock Lee',contact: '+62 5689 458 658',email: 'Billdabear@Gmail.Com' ,country: 'Indonesia',  status: 'Active', company: 'Soylent Corp', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/03.jpg', name: 'Dan Druff',contact: '+55 6523 456 856',email: 'Brocklee@Gmail.Com' ,country: 'Brazil',  status: 'Pending', company: 'Umbrella Corporation', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/04.jpg', name: 'Hans Olo', contact: '+91 2586 253 125',email: 'Budwiser@Ymail.Com' ,country: 'India', status: 'Inactive', company: 'Vehement Capital', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/05.jpg', name: 'Lynn Guini',contact: '+27 2563 456 589',email: 'Dandruff@Gmail.Com' ,country: 'Africa	',  status: 'Active', company: 'Massive Dynamic', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/02.jpg', name: 'Night Mare',contact: '+55 25685 256 589',email: 'Ericshun@Gmail.Com' ,country: 'Brazil',  status: 'Pending	', company: 'Globex Corporation', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/02.jpg', name: 'Eric Shun',contact: '(760) 765 2658',email: 'Hansolo@Gmail.Com' ,country: 'USA',  status: 'Hold', company: 'Acme Corporation', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/02.jpg', name: 'Aaronottix',contact: '+27 5625 456 589',email: 'Lynnguini@Gmail.Com' ,country: 'Africa',  status: 'Complite	', company: 'Vehement Capital', JoinDate: '2019/12/01', },
  { Profile: '/assets/images/user/02.jpg', name: 'Marge Arita', contact: '+55 2563 456 589',email: 'Margearita@Gmail.Com' ,country: 'Brazil', status: 'Active', company: 'Massive Dynamic', JoinDate: '2019/12/01', },
]);

const UserList = memo(() => {
  const columns = useRef([
  {
    data: null,
    title: 'Profile',
    render: function (row) {
      return `
     <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="${row.Profile}" alt="profile" loading="lazy">
          
        `;
    },
  },
  { data: 'name', title: 'Name' },
    { data: 'contact', title: 'Contact' },
    { data: 'email', title: 'Email' },
  { data: 'country', title: 'Country' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function (row) {
      return `
   <span class="badge bg-primary">${row.status}</span>
        `;
    },
  },
  
  { data: 'company', title: 'Company' },
  { data: 'JoinDate', title: 'JoinDate' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
       <div class="d-flex gap-1 align-items-center">
        <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Add" href="#">
                                    <span class="btn-inner">
                                       <i class="fa-solid fa-user-plus fa-xs"></i>
                                    </span>
                                 </a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
    },
  },
]);

  const showAlert = () => {
    deleteSwal();
  };

  const tableRef = useRef(null);

  useDataTable({
    tableRef: tableRef,
    columns: columns.current,
    data: tableData,
    actionCallback: (data) => {
      switch (data.method) {
        case 'delete':
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const deleteSwal = () => {
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
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="border-bottom d-flex justify-content-between align-items-center pb-3">
              <div className="d-flex align-items-start pt-3 gap-1">
                <div className="form-group">
                  <select type="select" className="form-control " placeholder="No Action" tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-6-tl5i">
                    <option data-select2-id="select2-data-8-30ut">No Action</option>
                    <option>Status</option>
                    <option>Delete</option>
                  </select>
                </div>
                <Button className="btn btn-primary ">Apply</Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive rounded py-4 table-space">
                <table id="datatable" ref={tableRef} className="data-tables table custom-table movie_table" data-toggle="data-table"></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

UserList.displayName = "UserList";
export default UserList;

