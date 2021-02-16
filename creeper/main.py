import requests
from bs4 import BeautifulSoup

headers = {
    'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'cookie':'_uuid=BED37FAB-1326-3E20-CF85-6967CFBD8CC204895infoc; sid=a94t99ld; buvid3=C58EE280-8F3B-4B46-859D-F23443F798AD143081infoc; rpdid=|(YuJY)~Ruu0J\'ulml~~R)Ym; LIVE_BUVID=AUTO9615958168414762; _ga=GA1.2.1752631103.1597053766; blackside_state=1; DedeUserID=27310755; DedeUserID__ckMd5=82860affaed3ae50; SESSDATA=5915e4d8%2C1614528902%2Cadcbc*91; bili_jct=8667083f9f2e653f382323158ee0f641; CURRENT_FNVAL=80; fingerprint3=6672cce5fc25cfabc48f4376944e617f; buvid_fp_plain=C58EE280-8F3B-4B46-859D-F23443F798AD143081infoc; buivd_fp=C58EE280-8F3B-4B46-859D-F23443F798AD143081infoc; fingerprint=80febb647451d52b4885dc7dab2d1ee9; fingerprint_s=92156101b380ac34450b1517c82a1541; PVID=1; CURRENT_QUALITY=64; bp_video_offset_27310755=489794342406694223; bp_t_offset_27310755=489811865880866580; finger=1777945899',
    'referer':'https://search.bilibili.com/',
    'sec-fetch-dest':'iframe',
    'dnt':'1',
    ''
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Edg/88.0.705.63'
}
url = 'https://space.bilibili.com/100680137/article'
strhtml = requests.get(url, headers=headers)
print(strhtml.text)
soup = BeautifulSoup(strhtml.text, 'lxml')

for child in soup.descendants:
    pass
    # print(child)
