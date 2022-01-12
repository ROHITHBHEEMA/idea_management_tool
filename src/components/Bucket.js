import React, { Component } from "react";
import Note from "./Note";
import { Draggable } from "react-beautiful-dnd";

class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
    };
  }

  render() {
    const {
      showGroupedData,
      id,
      addSelectedNotes,
      allNotes,
      allBuckets,
      deleteNoteFromBucket,
      editNoteFromBucket,
    } = this.props;
    if (!showGroupedData) {
      return (
          <React.Fragment>
            {allNotes &&
                allNotes.map((eachNote) => {
                  return (
                      <div style={{ width: "170px", display: "inline-block", margin: '10px' }}>
                        <Draggable
                            key={eachNote.id}
                            draggableId={eachNote.id}
                            index={eachNote.id}
                        >
                          {(provided) => (
                              <div
                                  style={{margin: '10px'}}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                              >
                                <Note
                                    showGroupedData={showGroupedData}
                                    bucketId={id}
                                    addSelectedNotes={addSelectedNotes}
                                    id={eachNote.id}
                                    mainContent={eachNote.body}
                                    userName={eachNote.name}
                                    color={eachNote.color}
                                    allBuckets={allBuckets}
                                    deleteNodeFromList={deleteNoteFromBucket}
                                    editNoteFromBucket={editNoteFromBucket}
                                    ctrlPressed={this.props.ctrlPressed}
                                    selectedNotes={this.props.selectedNotes}
                                />
                              </div>
                          )}
                        </Draggable>
                      </div>
                  );
                })}
          </React.Fragment>
      );
    } else {
      return (
          <div
              className="group"
              style={{
                display: showGroupedData ? "inline-block" : "contents",
                width: !showGroupedData ? "2px" : "auto",

              }}
          >
            <div className="text-center">
            <span
                className="head-box"
                style={{ display: showGroupedData ? "inline-block" : "none" }}
            >
              {id}
            </span>
            </div>
            <div style={{ display: showGroupedData ? "block" : "inline",  display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
              {allNotes &&
                  allNotes.map((eachNote) => {
                    return (
                        <div style={{ width: "175px", display: "inline-block", padding: '0px', margin: '5px'}}>
                          <Draggable
                              style={{paddingRight: 0, marginRight: 0}}
                              key={eachNote.id}
                              draggableId={eachNote.id}
                              index={eachNote.id}
                          >
                            {(provided) => (
                                <div

                                    key={eachNote.id}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                >
                                  <Note

                                      showGroupedData={showGroupedData}
                                      bucketId={id}
                                      id={eachNote.id}
                                      addSelectedNotes={addSelectedNotes}
                                      mainContent={eachNote.body}
                                      userName={eachNote.name}
                                      color={eachNote.color}
                                      allBuckets={allBuckets}
                                      deleteNodeFromList={deleteNoteFromBucket}
                                      editNoteFromBucket={editNoteFromBucket}
                                  />
                                </div>
                            )}
                          </Draggable>
                        </div>
                    );
                  })}
            </div>
          </div>
      );
    }
  }
}

export default Bucket;
