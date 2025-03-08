


import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { focusOnFeild, hasValidationError, validationError } from '../../helpers/Frontend';
import Loading from '../Loading/Loading';
import { API_BASE_URL_SERVER } from '../../config/Commen';


export const AlreadyAddedDoc = ({ setActiveTab, setDocId, setDoctitle }) => {
    const [embed, setembed] = useState()
    const [docId, setdocId] = useState()
    const [submitting, setIsSubmitting] = useState(false);
    const [searchinput, setSearchinput] = useState();
    const [isloading, setisloading] = useState(true);
    const [tableData, setTableData] = useState([]);
    const [isdis, setdisable] = useState();
    const onChange = (e, title) => {
        setdocId(e.target.value)
        setDoctitle(title)
    }
    const fetchData = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL_SERVER}/api/1.0/docs`,
            headers: {}
        };
        await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    setisloading(false)
                    setTableData(response?.data?.data)
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message)
                setisloading(false)
                console.log(error);
            });

    }

    // const updateEmbed = async (id) => {
    //     setisloading(true)
    //     let data = JSON.stringify({
    //         "embedding": embed
    //     });

    //     let config = {
    //         method: 'put',
    //         maxBodyLength: Infinity,
    //         url: `${API_BASE_URL_SERVER}/api/1.0/doc/${id}/embedding`,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: data
    //     };

    //     axios.request(config)
    //         .then((response) => {
    //             if (response.status == 200) {
    //                 toast.success(response?.data.message)
    //                 setisloading(false)
    //                 setembed()
    //                 setdisable()

    //             }
    //         })
    //         .catch((error) => {
    //             toast.error(error.message)
    //             setisloading(false)
    //             console.log(error);
    //         });
    // }
    useEffect(() => { fetchData() }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) {
            return;
        }
    }
    return (
        <>
            <form className='position-relative' onSubmit={onSubmit} >
                {isloading && <Loading />}
                <div className="alert alert-pro  my-3">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="row justify-between g-2"><div className="col-7 col-sm-4 text-start">
                            <div id="DataTables_Table_0_filter" className="search-document-pre dataTables_filter">
                                <label>
                                    <input type="text" className="form-control form-control-sm" value={searchinput} onChange={(e) => setSearchinput(e.target.value)} placeholder="Type in to Search" />
                                </label>
                            </div></div><div className="col-5 col-sm-8 text-end"><div className="datatable-filter"><div className="d-flex justify-content-end g-2"><div className="dataTables_length" id="DataTables_Table_0_length"><label><span className="d-none d-sm-inline-block">Show</span><div className="form-control-select"> <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </div></label></div></div></div></div></div>
                        <div className="datatable-wrap my-3">
                            <div className="card-inner" style={{ padding: "0" }}>
                                <table className=" nowrap table" data-export-title="Export">
                                    <thead>
                                        <tr>
                                            <th> Radio Button</th>
                                            <th>Document ID</th>
                                            <th>Document Title</th>
                                            <th>Description</th>
                                            {/* <th>Embedding Format</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData?.filter((item) => {
                                                if (searchinput) {
                                                    return item.title.toLowerCase().includes(searchinput) || item.description.toLowerCase().includes(searchinput) || item.embedding.includes(searchinput)
                                                }
                                                return item
                                            })?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>
                                                                <input type='radio' name='docId' value={item?.id}
                                                                    // defaultChecked={item.id == tableData[0]?.id} 
                                                                    onChange={(e) => onChange(e, item?.title)} />
                                                            </td>
                                                            <td>{item?.id}</td>
                                                            <td>{item?.title}</td>
                                                            <td>{item?.description}</td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <button className="btn btn-dim btn-orangelight my-3" onClick={() => {
                        setActiveTab(preTab => preTab + 1)
                        setDocId(docId)
                    }} disabled={docId ? false : true} type='button'> {submitting ? "loading..." : "Chat"} </button>
                </div>
            </form>
        </>)

}