import Avatar from './Avatar';

export default function Resfile({ file, author,title}) {
  if (file.data != null) {
    return (
      <div>
      <a
        className="flex flex-row items-center text-sm hover:bg-slate-500 hover:text-slate-50 p-2 rounded-lg border border-slate-300 hover:border-slate-500"
        type="link"
        href={`${process.env.NEXT_PUBLIC_API_URL}${file.data.attributes.url}`}
      >
          <Avatar
            alt={author.data.attributes.name}
            src={author.data.attributes.avatar.data.attributes.url}
            shift={false}
          />

          <div>{author.data.attributes.name}</div>
          <div>{`(${file.data.attributes.name})`}</div>
      </a>
      </div>
    );
  }
  //https://api.kdd.csie.ntust.edu.tw/uploads/Multi_Label_Text_Classification_Based_on_Multidimensional_Information_Extraction_bd10e414d5.pptx
}
