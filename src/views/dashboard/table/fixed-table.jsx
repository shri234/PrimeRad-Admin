import React from 'react';
import { Image,ProgressBar } from 'react-bootstrap';
import img1 from "/assets/images/shapes/01.png";
import img2 from "/assets/images/shapes/02.png"
import img3 from "/assets/images/shapes/03.png"
import img4 from "/assets/images/shapes/04.png"
import img5 from "/assets/images/shapes/06.png"
const BasicTable = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Basic Table</h4>
            </div>
          </div>
          <div className="card-body table-fixed p-0">
            <div className="table-responsive mt-4 border rounded">
              <table id="basic-table" className="table table-striped mb-0" role="grid">
                <thead>
                  <tr>
                    <th>Companies</th>
                    <th>Members</th>
                    <th>Budget</th>
                    <th>Status</th>
                    <th>Completion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img1} alt="profile" loading="lazy" />
                        <h6>Soft UI XD Version</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                        </a>
                      </div>
                    </td>
                    <td>$14000</td>
                    <td><div className="text-info">Pending</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>60%</h6>
                      </div>
                      <ProgressBar className="progress bg-soft-info shadow-none w-100" variant='info' style={{height:'6px'}} now={60}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img2} alt="profile" loading="lazy" />
                        <h6>Add Progress Track</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                        </a>
                      </div>
                    </td>
                    <td>$3000</td>
                    <td><div className="text-danger">Pending</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>10%</h6>
                      </div>
                      <ProgressBar className="progress bg-soft-danger shadow-none w-100" style={{height:'6px'}} variant='danger' now={10}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img3} alt="profile" loading="lazy" />
                        <h6>Fix Platform Errors</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                        </a>
                      </div>
                    </td>
                    <td>Not set</td>
                    <td><div className="text-success">Completed</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>100%</h6>
                      </div>
                      <ProgressBar style={{height:'6px'}} variant='success' now={100}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img4} alt="profile" loading="lazy" />
                        <h6>Launch Our Mobile App</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">AP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">DP</div>
                        </a>
                      </div>
                    </td>
                    <td>$20500</td>
                    <td><div className="text-success">Completed</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>100%</h6>
                      </div>
                      <ProgressBar style={{height:'6px'}} variant='success' now={100}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img5} alt="profile" loading="lazy" />
                        <h6>Add the New Pricing Page</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                      </div>
                    </td>
                    <td>$500</td>
                    <td><div className="text-primary">On Schedule</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>25%</h6>
                      </div>
                      <ProgressBar className="progress bg-soft-primary shadow-none w-100" style={{height:'6px'}} variant='danger' now={25}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image className="rounded img-fluid avatar-40 me-3 bg-soft-primary" src={img1} alt="profile" loading="lazy" />
                        <h6>Redesign New Online Shop</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                        </a>
                        <a href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                        </a>
                      </div>
                    </td>
                    <td>$2000</td>
                    <td><div className="text-warning">Completed</div></td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>40%</h6>
                      </div>
                      <ProgressBar className='progress bg-soft-warning shadow-none w-100' style={{height:'6px'}} variant='warning' now={40}/>
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
