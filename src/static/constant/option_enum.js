const option = {
  link: [
    {
      name: "来源",
      field: "source",
      list: [
        {
          value: "",
          name: "全部",
        },
        ...React.$enums.linkType,
      ],
    },
  ]
}


export default option


