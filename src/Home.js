import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React, { Component } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { AiOutlineFileExcel } from "react-icons/ai";
import { FaPrint } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ backgroundColor: "#e5e9ec" }}>
      <div class="container ">
        <div className="crud shadow-lg p-2 mb-5 mt-5 bg-body rounded">
          <div class="column mt-0 mb-0 ml-0 mr-0">
            <h2 style={{ textAlign: "left" }}>
              Lista {""}
              <Button>
                Ativos <RxTriangleDown />{" "}
              </Button>
            </h2>
            <div style={{ textAlign: "right" }}>
              <AiOutlineFileExcel /> <FaPrint />
              <button variant="primary" onClick={handleShow}>
                <GrAdd />
              </button>
            </div>
          </div>

          <div class="row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>TÍTULO</th>
                    <th>
                      LOJAS <RxTriangleDown />
                    </th>
                    <th>USUÁRIO</th>
                    <th>
                      DATA <RxTriangleDown />
                    </th>
                    <th>
                      TERMOS E COND. <RxTriangleDown />
                    </th>
                    <th>ENVIADOS</th>
                    <th>LIDOS</th>
                    <th>PENDENTES</th>
                    <th>RECEBIDOS SEM LEITURA</th>
                    <th>AÇÕES</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Comunicado teste 2</th>
                    <th>- </th>
                    <th>Gustavo Pontes</th>
                    <th>07/12/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado teste</th>
                    <th>- </th>
                    <th>Gustavo Pontes</th>
                    <th>07/12/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tahiti Tatiyuwa</th>
                    <th>21/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="view"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tathiana Imuta</th>
                    <th>08/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Notificação</th>
                    <th>A Miniatura </th>
                    <th>Miniatura Lojisrta</th>
                    <th>06/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Notificação</th>
                    <th>A/Z CALZATURE </th>
                    <th>Lojista Teste</th>
                    <th>06/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado</th>
                    <th>A Miniatura</th>
                    <th>Miniatura Lojisrta</th>
                    <th>05/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado</th>
                    <th>A/Z CALZATURE </th>
                    <th>Lojista Teste</th>
                    <th>05/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado</th>
                    <th>#Madnezz </th>
                    <th>Malltec</th>
                    <th>05/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tathiana Imuta</th>
                    <th>02/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tathiana Imuta</th>
                    <th>02/09/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tathiana Imuta</th>
                    <th>25/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Tathiana Imuta</th>
                    <th>25/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado</th>
                    <th>A/Z CALZATURE </th>
                    <th>Lojista Teste</th>
                    <th>22/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Comunicado</th>
                    <th>A Miniatura </th>
                    <th>Miniatura Lojisrta</th>
                    <th>22/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A Miniatura </th>
                    <th>Gustavo Pontes</th>
                    <th>09/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>Job reaberto</th>
                    <th>A/Z CALZATURE </th>
                    <th>Eduardo Ashikawa</th>
                    <th>05/08/2022 </th>
                    <th>Não </th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <td>
                      {" "}
                      <a
                        class="Eye"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#9aa4b3" }}
                      >
                        <i class="material-icons">
                          <FaEye />
                        </i>
                      </a>
                      <a
                        class="Tdelete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">
                          <TiDelete />
                        </i>
                      </a>
                    </td>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          </div>

          <div className="model">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Novo Comunicado</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="form-group">
                    <input
                      type=""
                      class="form-control"
                      id="titulo"
                      placeholder="Título:"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="Description"
                      class="form-control"
                      style={{ height: 300 }}
                      placeholder="Descrição:"
                    />
                  </div>
                  <div class="mt3">
                    <input
                      type="Questionário"
                      class="controlQuest"
                      id="quest"
                      aria-describedby="Quest-desc"
                      placeholder="Questionário:"
                    />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <button>
                      <IoIosSend />
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
