const TextBody = ({setText, text}: any) => {
  return <>
            <textarea
              className="w-full bg-gray-800 text-white" placeholder="start typing"
              name="props"
              id=""
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />
  </>

}

export default TextBody;
