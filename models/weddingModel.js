const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const weddingSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please add a firstname'],
  },
  lastname: {
    type: String,
    required: [true, 'Please add a lastname'],
    // default: 'huy hung'
  },
  date: {
    type: Date,
    // required: [true, 'Please add a date'],
    default: Date.now()
  },
  address: {
    type: String,
    // required: [true, 'Please add an address'],
    default: 'ha noi'
  },
  datawedding: {
    type: Object,
    // required: [true, 'Please add a datawedding'],
    default: {
      BrideGroom: {
        male: {
          firstname: 'd',
          lastname: 'dd',
          introduce: 'adasduashdaus',
          fb: 'hung',
          date: '25-03-2001',
          address: 'dasdasd',
          avatar: 'dasdad.jpg',
          location: 'dasd'
        },
        female: {
          firstname: 'd',
          lastname: 'dd',
          introduce: 'adasduashdaus',
          fb: 'hung',
          date: '25-03-2001',
          address: 'dasdasd',
          avatar: 'dasdad.jpg',
          location: 'dasd'
        }
      },
      BridesmaidsGroomsmen: {
        male: [
          {
            name: 'Trần Bảo Anh',
            introduce: 'Chàng trai Sài',
            fb: 'hung',
            avatar: 'dasdad.jpg'
          },
          {
            name: 'Hà Huy Hùng',
            introduce: 'Chàng trai Sài Gòn',
            fb: 'hung',
            avatar: 'dasdad.jpg'
          }
        ],
        female: [
          {
            name: 'Hồng Duyên',
            introduce: 'adasduashdaus',
            fb: 'hung',
            avatar: 'dasdad.jpg'
          },
          {
            name: 'Hồng Duyên 1',
            introduce: 'adasduashdaus',
            fb: 'hung',
            avatar: 'dasdad.jpg'
          }
        ]
      },
      Event: [
        {
          name: 'LỄ CƯỚI NHÀ NỮ',
          time: '07:30 AM',
          date: '10/02/2023',
          address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
          map: 'd'
        },
        {
          name: 'TIỆC CƯỚI NHÀ NỮ',
          time: '07:30 AM',
          date: '10/02/2023',
          address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
          map: 'd'
        },
        {
          name: 'LỄ CƯỚI NHÀ NAM',
          time: '07:30 AM',
          date: '10/02/2023',
          address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
          map: 'd'
        },
        {
          name: 'TIỆC CƯỚI NHÀ NAM',
          time: '07:30 AM',
          date: '10/02/2023',
          address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
          map: 'd'
        }
      ],
      StoryLove: [
        {
          title: 'Bạn có tin vào tình yêu online không?',
          time: 'December 12 2015',
          content:
            'Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.'
        },
        {
          title: 'Lời tỏ tình dễ thương^^',
          time: 'December 12 2015',
          content:
            'Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”.'
        },
        {
          title: 'Phút giây cầu hôn',
          time: 'December 12 2015',
          content:
            '5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.'
        },
        {
          title: 'Ngày lễ đính hôn',
          time: 'July 28 2018',
          content:
            '“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh.'
        }
      ],
      images: ['dsadasd.jpg']
    }
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  avatar: {
    type: String,
    default: 'default.jpg'
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      }
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});
const wedding = mongoose.model('weddings', weddingSchema);
module.exports = wedding;
