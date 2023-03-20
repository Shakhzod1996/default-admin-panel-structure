export interface ISomeCommonInterface {} // 🤦‍♂️

/**
 *
 * @TODO CTRL K + CTRL 0 / CTRL K + CTRL J
 * shuni bossayizlar hamma interfeyslar collapse / expan  bo'ladi, qulaylik uchun
 */
// table da yangi status type sini ko'rsanglar shunga qo'shib keturasizlar, misol uchun "deactive" ga o'xshash status kelsa
export type TTableStatus =
     | "active"
     | "inactive"
     | "pending"
     | "new"
     | "archieve"
     | "inDept"
     | "finished"
     | "paid"
     | "canceled"
     | "push"
     | "sms";

export interface ILoginData {
     _id: string;
     imgUrl: string;
     firstName: string;
     lastName: string;
     gender: string;
     address: string;
     phoneNumber: string;
     password: string;
     birthDate: string;
     telegramUsername: string;
     roleId: string;
     isDeleted: boolean;
     isActive: boolean;
     createdAt: string;
     updatedAt: string;
     role: IRole;
     token: string;
}

export interface ILanguageLevel {
     _id: string;
     imgUrl: string;
     name: string;
     shortName: string;
     percentage: number;
     language: {
          _id: string;
          imgUrl: string;
          name: string;
     };
}

export interface IRole {
     _id: string;
     role: string;
     isDeleted: boolean;
     employee: boolean;
     employeeCreate: boolean;
     employeeUpdate: boolean;
     employeeDelete: boolean;
     InSales: boolean;
     InSalesCreate: boolean;
     InSalesUpdate: boolean;
     InSalesDelete: boolean;
     OutSales: boolean;
     OutSalesCreate: boolean;
     OutSalesUpdate: boolean;
     OutSalesDelete: boolean;
     resource: boolean;
     resourceCreate: boolean;
     resourceUpdate: boolean;
     resourceDelete: boolean;
     createdAt: string;
     updatedAt: string;
}
export interface IshortArr {
     name: string;
     shortForm: string;
}

export interface IGetLangs {
     name: string;
     _id: string;
}

// ! Department

export interface ILabel {
     imgUrl: string;
     name: string;
     _id: string;
}

export interface IDepartLanguage {
     imgUrl?: string;
     name: string;
     _id: string;
}
export interface IDepartment {
     color: string;
     createdAt: string;
     imgUrl: string;
     labels: ILabel[];
     language?: IDepartLanguage;
     name: string;
     status: string;
     _id: string;
}

export interface IDepartmentById {
     color: string;
     createdAt: string;
     description: string;
     imgUrl: string;
     labels: ILabel[];
     languageId: string;
     name: string;
     status: "platform" | "group" | "individual";
     _id: string;
}

// ! Courses
export interface ICoursesLabel {
     imgUrl: string;
     name: string;
     _id: string;
}
export interface IOneCourse {
     _id: string;
     languageId: string;
     languageLevelId: string;
     imgUrl: string;
     name: string;
     price: number;
     discount: number;
     color: string;
     labels: [
          {
               imgUrl: string;
               name: string;
               _id: string;
          }
     ];
     introVideo: string;
     introImage: string;
     introText: string;
}
export interface ICourse {
     _id: string;
     name: string;
     price: number;
     discount: number;
     color: string;
     labels: ICoursesLabel[];
     createdAt: string;
     language: {
          _id: string;
          imgUrl: string;
          name: string;
     };
     languageLevel: {
          _id: string;
          name: string;
          shortName: string;
     };
}

export interface IPlatformLesson {
     _id: string;
     imgUrl: string;
     lessonNumber: number;
     name: string;
     createdAt: string;
     updatedAt: string;
}

// ! Resources
export interface IResourceLanguage {
     _id: string;
     imgUrl: string;
     name: string;
     createdAt: string;
     updatedAt: string;
     wordGroup: IshortArr[];
}
export interface IStudent {
     _id: string;
     status: TTableStatus;
     student: {
          _id: string;
          firstName: string;
          lastName: string;
          address: string;
          imgUrl: string;
          studentAge: number | null;
     };
     course: {
          _id: string;
          name: string;
          courseCount?: string | null;
     };
     language: {
          _id: string;
          imgUrl: string;
          name: string;
     };
}
export interface IStudentById {
     _id: string;
     firstName: string;
     lastName: string;
     phoneNumber: string;
     student_code: string;
     address: string;
     imgUrl: string;
     birthDate: string;
     gender: string;
     email: string;
     status: string;
     createdAt: string;
     updatedAt: string;
     password: string;
     firebase_token: string;

     balance: number;
     vocabularyCount: number;
     score: number;
     isOnline: boolean;
     lastOnline: number;
     hobbies: IHobby[];
}
export interface IGroupStudent {
     _id: string;
     currentLessonNumber: number;
     student: {
          _id: string;
          firstName: string;
          lastName: string;
          address: string;
          imgUrl: string | null;
          status: TTableStatus;
          age: number;
     };
}
export interface ITeacher {
     _id: string;
     imgUrl: string;
     firstName: string;
     lastName: string;
     password: string;
     address: string;
     gender: string;
     birthDate: string;
     telegramUsername: string;
     activity: string;
     motto: string;
     zoomLink: string;
     cardNumber: string;
     teachToLevels: string[];
     hobbies: {
          _id: string;
          name: string;
     };
     lessonPrice: number;
     createdAt: string;
     language: {
          _id: string;
          name: string;
     };
     languageLevel: {
          _id: string;
          name: string;
          shortName: string;
     };
     phoneNumber: string;
     isActive: boolean;
}
export interface ILanguage {
     _id: string;
     imgUrl: string;
     name: string;
}
export interface IEmployee {
     _id: string;
     firstName: string;
     lastName: string;
     phoneNumber: string;
     telegramUsername: string;
     createdAt: string;
     role: {
          _id: string;
     };
}

export interface ICourse {
     _id: string;
     name: string;
     price: number;
     discount: number;
     color: string;
     labels: {
          imgUrl: string;
          name: string;
          _id: string;
     }[];
     createdAt: string;
     language: {
          _id: string;
          imgUrl: string;
          name: string;
     };
     languageLevel: {
          _id: string;
          name: string;
          shortName: string;
     };
     imgUrl: string;
}

export interface ILesson {
     isFinished: boolean;
     isOpened: boolean;
     _id: string;
     lesson: {
          _id: string;
          imgUrl: string;
          lessonNumber: number;
          name: string;
     };
     course: string;
}

// ! Platform
export interface IPlatformVideo {
     _id: string;
     lessonId: string;
     videoUrl: string;
     videoImg: string;
     title: string;
     description: string;
}

export interface IPlatformGrammar {
     _id: string;
     content: IGrammarContent[];
     score: number;
}

export interface IGrammarContent {
     type: string;
     value: string;
     _id: string;
}

export interface IGroup {
     _id: string;
     name: string;
     days: string;
     beginDate: string;
     telegram: string;
     currentStudentCount: number;
     totalStudents: number;
     currentLessonNumber: number;
     language: {
          _id: string;
          imgUrl: string;
          name: string;
     };
     teacher: {
          firstName: string;
          lastName: string;
     };
     course: {
          _id: string;
          name: string;
     };
     duration: number;
     groupStatus: string;
}

export interface ISalary {
     _id: number;
     firstName: string;
     lastName: string;
     lessonCount: number;
     hourPrice: string;
     allPrice: string;
}

export interface IHobby {
     _id: string;
     imgUrl: string;
     name: string;
}
export interface ITeachLevel {
     _id: string;
     languageLevel: {
          _id: string;
          name: string;
     };
     question: string;
     trueAnswer: string;
}

export interface IOneCategory {
     _id: string;
     name: string;
     createdAt: "string";
}
export interface ICategory {
     total: number;
     data: IOneCategory[];
}

export interface IPaymentHistory {
     _id: string;
     transaction_id: string;
     business_id: string;
     business_time: number;
     amount: number;
     state: number;
     create_time: number;
     account: {
          student_code: string;
          _id: string;
     };
     status: TTableStatus;
     paymentType: string;
     createdAt: string;
     updatedAt: string;
     student: IStudentById; // there can be more data
     __v: 0;
}
export interface IStudentMessage {
     _id: string;
     type: TTableStatus;
     message: string;
     createdAt: string;
     student: {
          _id: string;
          firstName: string;
          lastName: string;
          phoneNumber: string;
          imgUrl: string;
     };
}
export interface IForum {
     total: number;
     data: IOneForum[];
}

export interface IOneForum {
     _id: string;
     imgUrl: string;
     text: string;
     status: string;
     createdAt: string;
     updatedAt: string;
     category: {
          _id: string;
          name: string;
     };
     student: {
          _id: string;
          firstName: string;
          lastName: string;
          imgUrl: string;
     };
}

export interface IOneComplaint {
     _id: string;
     postId: string;
     replyId: string;
     createdAt: string;
     studentId: string;
     updatedAt: string;
     forum: {
          _id: string;
          isDeleted: boolean;
          studentId: string;
          imgUrl: string;
          text: string;
          categoryId: string;
          totalLikes: number;
          replyCount: number;
          viewCount: number;
          isAnswered: boolean;
          status: string;
          likes: string[];
          createdAt: string;
          updatedAt: string;
          __v: number;
     };
     reply: {
          _id: string;
          isDeleted: boolean;
          studentId: string;
          postId: string;
          comment: string;
          isSelected: boolean;
          likeCount: number;
          createdDate: number;
          createdAt: string;
          updatedAt: string;
          __v: 0;
     };
     student: {
          _id: string;
          isDeleted: false;
          firstName: string;
          lastName: string;
          phoneNumber: string;
          student_code: string;
          address: string;
          imgUrl: string;
          birthDate: string;
          gender: string;
          email: string;
          status: string;
          balance: number;
          vocabularyCount: number;
          score: number;
          firebase_tokens: [string];
          createdAt: string;
          updatedAt: string;
          __v: 0;
          password: "0561352aA_";
          lastOnline: 1676972610891;
          languageLevel: string;
          firebase_token: string;
          hobbies: string[];
     };
}

export interface IComplaint {
     total: number;
     data: IOneComplaint[];
}

export interface IOneVideo {
     _id: string;
     name: string;
     imgUrl: string;
     link: string;
     createdAt: string;
     category: {
          name: string;
     };
}

export interface IVideos {
     total: number;
     data: IOneVideo[];
}

export interface IOneBlog {
     _id: string;
     name: string;
     imgUrl: string;
     createdAt: string;
     updatedAt: string;
     category: {
          name: string;
     };
}

export interface IBlog {
     total: number;
     data: IOneBlog[];
}
