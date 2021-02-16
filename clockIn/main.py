import requests
import json

url = "https://yq.guet.edu.cn/api/app/community/healthcode/default/health/v2"
headers = {
    "Geo-Coordinate": "GCJ02",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
    "X-Client-AppName": "guet",
    "X-Client-DeviceId": "6027b8ece40056e47681845e",
    "content-type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjNmMzczOWRmNTM0MDcyZjdlMWVmMTIiLCJuYW1laWQiOiI1ZjNmMzczOWRmNTM0MDcyZjdlMWVmMTIiLCJqdGkiOiJhMWU2YjUzNC01YWUxLTQ2OWUtOWRlMS01NTczMTliODFiMzIiLCJpYXQiOjE2MTM0NTg2NjAsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IldlaXhpbiIsIm5iZiI6MTYxMzQ1ODY2MCwiZXhwIjoxNjE0NjY4MjYwLCJpc3MiOiJpTWV0cmljLmNuIiwiYXVkIjoiaU1ldHJpYy5jbiJ9.MHNgYj0ZsVyDIKL_hISWsxMy1gknxLqK4kHKRolUlZ4"
}
data = {
    "data": {
        "body_temperature": 36.5,
        "flags": 1,
        "gx2": {"tw": "36.4",
                "q1": "0",
                "q2": "0",
                "q3": "0",
                "q4": "0",
                "q5": "0",
                "q6": "1",
                "q7": "0",
                "q8": "0",
                "q9": "0",
                "q10": "0",
                "q12": "湖南省常德市柳叶湖度假区星语林小区",
                "q13": "0",
                "sbdd": "桂林 七星区"},
        "tags": []},
    "loc": {"gps": {"lng": 116.40717, "lat": 39.90469}},
    "member": {
        "uid": "5f3f3739df534072f7e1ef12"}
}
data = json.dumps(data)
out = requests.get(url, data, headers=headers)
print(out.text)

# url = "https://yq.guet.edu.cn/api/user/app/version"
# headers = {
#     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjNmMzczOWRmNTM0MDcyZjdlMWVmMTIiLCJuYW1laWQiOiI1ZjNmMzczOWRmNTM0MDcyZjdlMWVmMTIiLCJqdGkiOiJkMjE1NGUyNi0xYWNlLTRkOTAtYjUwZi1lZDlkZjEzMjlkZjQiLCJpYXQiOjE2MTMyMTgyNTQsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IldlaXhpbiIsIm5iZiI6MTYxMzIxODI1NCwiZXhwIjoxNjE0NDI3ODU0LCJpc3MiOiJpTWV0cmljLmNuIiwiYXVkIjoiaU1ldHJpYy5jbiJ9.WbZnZLxDYCsA5Lect0-GxMjXriLs2bp7c369YXE93Y4",
#     "Geo-Coordinate": "GCJ02",
#     "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
#     "X-Client-AppName": "guet",
#     "content-type": "application/json;charset=UTF-8"
# }
# data = {
#     "appversion2": "2.03",
#     "applabel": "桂电畅行证"
# }
# data=json.dumps(data)
# a = requests.post(url, data, headers=headers)
# print(a.text)
