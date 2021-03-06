import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
/**<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li>
          <a class="breadcrumb-item active" aria-current="page" routerLink="about" >Home </a><a routerLink="dashboard" > /Dashboard </a>
        </li>
        </ol>
      </nav>
<div class="container-fluid">
<div class="row">
  <div class="col-lg-3 col-md-6">
      <div class="panel panel-primary">
          <div class="panel-heading">
              <div class="row">
                  <div class="col-xs-4">
                      <!-- <i class="fa fa-comments fa-5x"></i> -->
                      <img src="assets/Images/sedantrans1.png" width="100" height="100">
                  </div>
                  <div class="col-xs-8 text-right">
                      <div class="huge">26</div>
                      <div>Sedan</div>
                  </div>
              </div>
          </div>
          <a href="#">
              <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                  <div class="clearfix"></div>
              </div>
          </a>
      </div>
  </div>
  <div class="col-lg-3 col-md-6">
      <div class="panel panel-success">
          <div class="panel-heading">
              <div class="row">
                  <div class="col-xs-4">
                      <!-- <i class="fa fa-tasks fa-5x"></i> -->
                      <img src="assets/Images/suvtran1.png" width="100" height="100">
                  </div>
                  <div class="col-xs-8 text-right">
                      <div class="huge">12</div>
                      <div>SUV</div>
                  </div>
              </div>
          </div>
          <a href="#">
              <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                  <div class="clearfix"></div>
              </div>
          </a>
      </div>
  </div>
  <div class="col-lg-3 col-md-6">
      <div class="panel panel-warning">
          <div class="panel-heading">
              <div class="row">
                  <div class="col-xs-4">
                      <!-- <i class="fa fa-shopping-cart fa-5x"></i> -->
                      <img src="assets/Images/sporttrans.jpg" width="100" height="100">
                  </div>
                  <div class="col-xs-8 text-right">
                      <div class="huge">124</div>
                      <div>Sports</div>
                  </div>
              </div>
          </div>
          <a href="#">
              <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                  <div class="clearfix"></div>
              </div>
          </a>
      </div>
  </div>
  <div class="col-lg-3 col-md-6">
      <div class="panel panel-danger">
          <div class="panel-heading">
              <div class="row">
                  <div class="col-xs-4">
                      <!-- <i class="fa fa-support fa-5x"></i> -->
                      <img src="assets/Images/ecotrans.png" width="100" height="100">
                  </div>
                  <div class="col-xs-8 text-right">
                      <div class="huge">13</div>
                      <div>Economy</div>
                  </div>
              </div>
          </div>
          <a href="#">
              <div class="panel-footer">
                  <span class="pull-left">View Details</span>
                  <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                  <div class="clearfix"></div>
              </div>
          </a>
      </div>
  </div>
</div>
</div>
<!-- /.row -->
<!-- <div class="row">
  <div class="col-md-6">
      <div class="container-fluid" style="padding: 0px;">
          <div style="overflow-y: none;">
          <fusioncharts
          width="400" 
          height="300"
          type="column2d"
          dataFormat="json"
          [dataSource]="data" >
        </fusioncharts>
      
        <fusioncharts
       width="500" 
       height="400"
       type="pie3d"
       [dataSource]=dataSource >
       </fusioncharts>
      </div>
      </div>
  </div>
  </div> -->
  
<div class="container-fluid" style="padding: 0px;">
    <div style="overflow-y: none;">
    <div style="display: inline;float:left;">   
    <fusioncharts
    width="400" 
    height="300"
    type="column3d"
    dataFormat="json"
    [dataSource]="data" >
  </fusioncharts>
</div>  
<div>
  <fusioncharts
 width="500" 
 height="400"
 type="pie3d"
 [dataSource]=dataSource >
 </fusioncharts>
</div>  
</div>
</div>




 */