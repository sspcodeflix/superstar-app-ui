export const DownloadDoc = () => {
    return (
        <>
            <div className='position-relative' >
                {/* {submitting && <Loading />} */}
                <div className="alert alert-pro  my-3">
                <table className="table">
                    <thead className="table">
                        <tr className="text-warning">
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Select Version</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div></td>
                            <td>third pdf title</td>
                            <td>third pdf Description</td>
                            <td>
                                <div style={{ position: "relative", maxWidth: "80%" }} className='selectDev ml-3 relative'>
                                    <select className="custom-select w-full cursor-pointer" name='embed' >
                                        <option value={1}>v.1</option>
                                        <option value={2}>v.2</option>
                                        <option value={3}>v.3</option>
                                        <option value={4}>v.4</option>
                                    </select>
                                    <span style={{ position: "absolute", top: "5px", right: "9px" }}>
                                        <em class="icon ni ni-downward-alt-fill"></em>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <button className="btn btn-dark">Download</button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div></td>
                            <td>third pdf title</td>
                            <td>third pdf Description</td>
                            <td>
                                <div style={{ position: "relative", maxWidth: "80%" }} className='selectDev ml-3 relative'>
                                    <select className="custom-select w-full cursor-pointer" name='embed' >
                                        <option value={1}>v.1</option>
                                        <option value={2}>v.2</option>
                                        <option value={3}>v.3</option>
                                        <option value={4}>v.4</option>
                                    </select>
                                    <span style={{ position: "absolute", top: "5px", right: "9px" }}>
                                        <em class="icon ni ni-downward-alt-fill"></em>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <button className="btn btn-dark">Download</button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div></td>
                            <td>third pdf title</td>
                            <td>third pdf Description</td>
                            <td>
                                <div style={{ position: "relative", maxWidth: "80%" }} className='selectDev ml-3 relative'>
                                    <select className="custom-select w-full cursor-pointer" name='embed' >
                                        <option value={1}>v.1</option>
                                        <option value={2}>v.2</option>
                                        <option value={3}>v.3</option>
                                        <option value={4}>v.4</option>
                                    </select>
                                    <span style={{ position: "absolute", top: "5px", right: "9px" }}>
                                        <em class="icon ni ni-downward-alt-fill"></em>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <button className="btn btn-dark">Download</button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div></td>
                            <td>third pdf title</td>
                            <td>third pdf Description</td>
                            <td>
                                <div style={{ position: "relative", maxWidth: "80%" }} className='selectDev ml-3 relative'>
                                    <select className="custom-select w-full cursor-pointer" name='embed' >
                                        <option value={1}>v.1</option>
                                        <option value={2}>v.2</option>
                                        <option value={3}>v.3</option>
                                        <option value={4}>v.4</option>
                                    </select>
                                    <span style={{ position: "absolute", top: "5px", right: "9px" }}>
                                        <em class="icon ni ni-downward-alt-fill"></em>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <button className="btn btn-dark">Download</button>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}