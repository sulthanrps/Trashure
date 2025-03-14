export default function DataDiri(){
    return (
        <div className="flex flex-col gap-8 border border-gray rounded-2xl p-6 w-[75%] max-h-max">
            <div>
                <p>Nama Penerima</p>
                <p className="font-bold text-xl">Nada Musyaffa Bilhaqi</p>
            </div>

            <div>
                <p>Alamat Detil</p>
                <p className="font-bold text-xl">Jalan Watugong No. 34, RT 65/RW 78</p>
            </div>

            <div className="flex gap-64">
                <div>
                    <p>Provinsi</p>
                    <p className="font-bold text-xl">Jawa Timur</p> 
                </div>

                <div>
                    <p>Kota/Kabupaten </p>
                    <p className="font-bold text-xl">Kota Jakarta Utara</p>
                </div>
            </div>

            <div className="flex gap-36">
                <div>
                    <p>Kecamatan</p>
                    <p className="font-bold text-xl">Kecamatan Lowokwaru</p> 
                </div>

                <div>
                    <p>Kelurahan/Desa </p>
                    <p className="font-bold text-xl">Rawa Badak Selatan</p>
                </div>
            </div>

            
        </div>
    )
}