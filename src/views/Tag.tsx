import React from "react";
import {useTags} from "../hooks/useTags";
import {useParams} from "react-router-dom";

type Params = {
    id :string
}

const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id as string))
    return (
      <div>{tag.name}</div>
    )
}

export {Tag}