import { useEffect, useState } from "react";
import { deleteUrl, fetchUrls } from "../apis/UrlShortnerAPI";
import api from "../config/AxiosInstance";
import { toast } from "react-toastify";

// Dummy data for UI only
const dummyUrls = [
  {
    _id: 1,
    originalUrl: "https://google.com",
    shortCode: "aB12x",
  },
  {
    _id: 2,
    originalUrl: "https://github.com/codewithkaushalraj/React",
    shortCode: "kR82p",
  },
];
const UrlShortener = () => {

    const [urls,setUrls]=useState([])
    const [inputVal,setInputVal]=useState("");
    const [currentUrls,setCurrentUrls]=useState("")

    /**
     * Fetch all Data From Backend
     **/
    const fetchAllData=async()=>{
         let res= await fetchUrls()
        // console.log(res.data)
        setUrls(res.data.urls)
    }
    useEffect(()=>{fetchAllData()},[])

    /**
     * Handle the Data When Long  Url is Submit
     **/

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(inputVal);
        setCurrentUrls(inputVal)

      try {
          const res=await api.post('/',{url:inputVal});
        console.log(res)
        fetchAllData()
        
      } catch (error) {
        console.log(error)
      }
        setInputVal("")
    }

    /**
     * -------------------------------------------
     * Delete the URl
     **/
    
    const delUrl=async(id)=>{
      const res=await deleteUrl(id);

      toast.error('Data Deleted Successfully.')
        fetchAllData()

      
    }

    /**
     * -------------Copy URL----------------------
     **/
    
    const handleCopy = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
    // alert("URL copied!");
  } catch (error) {
    console.error("Failed to copy:", error);
  }
};

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Simple • Fast • Secure
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Make your links
            <span className="text-blue-600"> shorter.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Turn long URLs into short, easy-to-share links in seconds.
          </p>
        </section>

        {/* URL Form */}
        <section className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-4">
                <span className="mr-2 text-slate-400">🔗</span>

                <input
                  type="text"
                  placeholder="Paste your long URL here..."
                  className="w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  onChange={(e)=>{
                    setInputVal(e.target.value)
                  }}
                  value={inputVal}
                />
              </div>

              <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
              onClick={handleSubmit}
              >
                Shorten URL
              </button>
            </div>
          </div>
        </section>

        {/* URLs Section */}
        <section className="mx-auto mt-14 max-w-5xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Your Links</h3>

              <p className="mt-1 text-sm text-slate-500">
                Manage your shortened URLs
              </p>
            </div>

            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              {urls.length} Links
            </span>
          </div>

          {/* URL Cards */}
          <div className="space-y-4">

            {urls?.map((url) => (
              <div
                key={url._id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  {/* URL Details */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        🔗
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Short URL
                        </p>

                        <a
                          href={`http://localhost:3000/${url.shortCode}`} target="_blank"
                          className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          http://localhost:5173/{url.shortCode}
                        </a>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 px-4 py-3">
                      <p className="mb-1 text-xs font-medium text-slate-400">
                        Original URL
                      </p>

                      <p className="truncate text-sm text-slate-600">
                        {url.originalUrl}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                    onClick={() => handleCopy(url.shortCode)}
                     className="rounded-lg bg-blue-600 text-white border border-slate-200 px-4 py-2 text-sm font-medium active:scale-95">
                      Copy
                    </button>

                    <button 
                    onClick={()=>{delUrl(url._id)}}
                    className="rounded-lg border bg-red-500 text-white border-red-200 px-4 py-2 text-sm font-medium active:scale-95">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UrlShortener;
