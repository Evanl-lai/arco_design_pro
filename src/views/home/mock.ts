import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
// import { ServiceRecord } from '@/api/list';
const { Random } = Mock;

const data = Mock.mock({
    'list|20': [
        {
            "id|+1": 1,
            "title": "@csentence",
            "mtime": "@datetime",
            "text": "@cparagraph(30,50)",
        }
    ]
})

setupMock({
    setup() {
        Mock.mock(new RegExp('/api/home/listnotice'), () => {
            return successResponseWrap(
                data
            )
        })
    }
})