function SanPhamService() {

    this.layDanhSachSP = function() {
        return axios({
          method: "GET",
          url: "https://5dcda609d795470014e4d2b9.mockapi.io/api/Products"
        });
      };
}