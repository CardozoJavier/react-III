import React from "react";

const NewPlaylist = ({handleChangePl, consolSubmit, inputValue, check}) => (
    <div className="well">
      <form onSubmit={consolSubmit} className="form-horizontal">
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input value={inputValue} onChange={handleChangePl} className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button disabled={check} type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    );

export default NewPlaylist;